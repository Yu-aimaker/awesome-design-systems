"use client";

import { CheckCircle } from "@phosphor-icons/react";
import { Lottie, type LottieHandle } from "lottie-react";
import { useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import check from "@/data/check.lottie.json";
import { Button } from "@/components/ui/button";

export function LottieMark() {
  const reduce = useReducedMotion();
  const handle = useRef<LottieHandle>(null);
  const [done, setDone] = useState(false);

  function play() {
    setDone(false);
    handle.current?.stop();
    handle.current?.play();
  }

  function stop() {
    handle.current?.stop();
    setDone(false);
  }

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex h-40 w-40 items-center justify-center rounded-lg border border-border bg-card">
        {reduce ? (
          <CheckCircle size={72} className="text-primary" weight="regular" aria-hidden />
        ) : (
          <Lottie
            lottieRef={handle}
            src={check}
            autoplay={false}
            loop={false}
            className="h-28 w-28"
            subscriptions={{ complete: () => setDone(true) }}
            aria-label="保存完了の合図"
          />
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="button" variant="secondary" onClick={play} disabled={Boolean(reduce)}>
          完了を再生
        </Button>
        <Button type="button" variant="ghost" onClick={stop} disabled={Boolean(reduce)}>
          止める
        </Button>
      </div>
      <p className="text-[13px] leading-[1.65] text-muted-foreground" aria-live="polite">
        {reduce ? "Reduce Motion。最終形だけ出す。" : done ? "確定した。ループしない。" : "未再生。値が通った瞬間に一度だけ。"}
      </p>
    </div>
  );
}
