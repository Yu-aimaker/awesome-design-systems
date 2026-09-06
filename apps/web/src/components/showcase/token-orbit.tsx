"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const COLORS = [0xffffff, 0x2456d6, 0xe86a1a];

export function TokenOrbit() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1c24);

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 1.4, 6.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xf4f7ff, 1.35);
    light.position.set(3, 5, 4);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x8a90a3, 0.55));

    const group = new THREE.Group();
    scene.add(group);

    COLORS.forEach((hex, index) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.42, 32, 32),
        new THREE.MeshStandardMaterial({
          color: hex,
          roughness: 0.35,
          metalness: 0.08,
        }),
      );
      const angle = (index / COLORS.length) * Math.PI * 2;
      mesh.position.set(Math.cos(angle) * 1.6, Math.sin(angle) * 0.35, Math.sin(angle) * 1.6);
      group.add(mesh);
    });

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.65, 0.018, 16, 80),
      new THREE.MeshBasicMaterial({ color: 0xc9ced8 }),
    );
    ring.rotation.x = Math.PI / 2.3;
    scene.add(ring);

    let frame = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    const tick = () => {
      if (!reduceMotion) {
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
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className="h-72 w-full overflow-hidden rounded-lg border border-border bg-foreground"
      aria-label="トークン3色の軌道プレビュー"
    />
  );
}
