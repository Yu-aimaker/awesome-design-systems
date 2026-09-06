"use client";

import { Lottie } from "lottie-react";
import { useState } from "react";
import check from "@/data/check.lottie.json";
import { Button } from "@/components/ui/button";

export function LottieMark() {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex h-40 w-40 items-center justify-center rounded-lg border border-border bg-card">
        <Lottie
          key={key}
          src={check}
          autoplay
          loop={false}
          className="h-28 w-28"
        />
      </div>
      <Button type="button" variant="secondary" onClick={() => setKey((k) => k + 1)}>
        再生し直す
      </Button>
    </div>
  );
}
