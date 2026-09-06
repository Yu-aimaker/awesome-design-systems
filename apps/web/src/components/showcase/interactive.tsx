"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export function InteractiveKit() {
  const [on, setOn] = useState(true);
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-lg border border-line bg-surface p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-subtle">
          Button
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button type="button">保存する</Button>
          <Button type="button" variant="secondary">
            戻る
          </Button>
          <Button type="button" variant="ghost">
            詳細
          </Button>
          <Button type="button" variant="danger">
            削除
          </Button>
          <Button type="button" disabled>
            送信不可
          </Button>
        </div>
        <p className="mt-4 text-[13px] leading-[1.6] text-ink-muted">
          1面の primary は1つ。disabled は理由を近くに置く。
        </p>
      </div>

      <div className="rounded-lg border border-line bg-surface p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-subtle">
          Input / Switch
        </p>
        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            setError(value.trim() ? null : "プロジェクト名を入力してください");
          }}
        >
          <label className="flex flex-col gap-2 text-[13px] text-ink">
            プロジェクト名
            <Input
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                if (error) setError(null);
              }}
              placeholder="例: checkout-web"
              aria-invalid={Boolean(error)}
            />
          </label>
          {error ? <p className="text-[13px] text-danger">{error}</p> : null}
          <Switch checked={on} onChange={setOn} label="レビュー依頼を送る" />
          <div>
            <Button type="submit">作成する</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
