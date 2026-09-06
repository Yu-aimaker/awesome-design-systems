"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";

function cssColor(variable: string): THREE.Color {
  const probe = document.createElement("span");
  probe.style.color = `var(${variable})`;
  document.body.appendChild(probe);
  const rgb = getComputedStyle(probe).color;
  probe.remove();
  return new THREE.Color(rgb);
}

function StaticIsland({ note }: { note: string }) {
  return (
    <div className="flex h-72 w-full flex-col items-start justify-center gap-4 rounded-lg border border-border bg-card px-6">
      <div className="flex gap-3" aria-hidden>
        <span className="h-10 w-10 rounded-full border border-border bg-background" />
        <span className="h-10 w-10 rounded-full bg-foreground" />
        <span className="h-10 w-10 rounded-full bg-primary" />
      </div>
      <p className="text-[13px] leading-[1.65] text-muted-foreground">{note}</p>
    </div>
  );
}

export function TokenOrbit() {
  const hostRef = useRef<HTMLDivElement>(null);
  const playRef = useRef(false);
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playRef.current = playing && !reduce;
  }, [playing, reduce]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || reduce) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      host.replaceChildren();
      host.textContent = "WebGL が無い。白・墨・青の静物。";
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 1.2, 6.2);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    host.replaceChildren(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(3, 5, 4);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const group = new THREE.Group();
    scene.add(group);

    [0, 1, 2].forEach((index) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.42, 32, 32),
        new THREE.MeshStandardMaterial({ roughness: 0.4, metalness: 0.04 }),
      );
      const angle = (index / 3) * Math.PI * 2;
      mesh.position.set(Math.cos(angle) * 1.55, Math.sin(angle) * 0.28, Math.sin(angle) * 1.55);
      group.add(mesh);
    });

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.6, 0.016, 16, 80),
      new THREE.MeshBasicMaterial({ color: 0xc9ced8 }),
    );
    ring.rotation.x = Math.PI / 2.3;
    scene.add(ring);

    const paint = () => {
      const paper = cssColor("--background");
      const ink = cssColor("--foreground");
      const blue = cssColor("--primary");
      const line = cssColor("--border");
      const meshes = group.children.filter((child): child is THREE.Mesh => child instanceof THREE.Mesh);
      const colors = [paper, ink, blue];
      meshes.forEach((mesh, index) => {
        const material = mesh.material;
        if (material instanceof THREE.MeshStandardMaterial) {
          material.color.copy(colors[index] ?? blue);
        }
      });
      const previous = ring.material;
      ring.material = new THREE.MeshBasicMaterial({ color: line });
      if (previous instanceof THREE.Material) previous.dispose();
    };
    paint();

    let frame = 0;
    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(host);

    const themeWatch = new MutationObserver(paint);
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const tick = () => {
      if (playRef.current) {
        group.rotation.y += 0.006;
        ring.rotation.z += 0.002;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      themeWatch.disconnect();
      group.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const material = obj.material;
          if (Array.isArray(material)) material.forEach((item) => item.dispose());
          else material.dispose();
        }
      });
      ring.geometry.dispose();
      if (Array.isArray(ring.material)) ring.material.forEach((item) => item.dispose());
      else ring.material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [reduce]);

  if (reduce) {
    return <StaticIsland note="Reduce Motion。軌道は回さない。" />;
  }

  return (
    <div>
      <div
        ref={hostRef}
        className="h-72 w-full overflow-hidden rounded-lg border border-border bg-card"
        aria-label="トークン3色の島。白・墨・青"
      />
      <div className="mt-3 flex flex-wrap gap-3">
        <Button type="button" variant="secondary" onClick={() => setPlaying((on) => !on)}>
          {playing ? "止める" : "回す"}
        </Button>
      </div>
    </div>
  );
}
