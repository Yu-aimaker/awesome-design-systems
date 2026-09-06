"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export function InteractiveKit() {
  const [on, setOn] = useState(true);
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [confirm, setConfirm] = useState(false);
  const [deleted, setDeleted] = useState(false);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
          Button · Responsibility
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button type="button">保存する</Button>
          <Button type="button" variant="secondary">
            戻る
          </Button>
          <Button type="button" variant="ghost">
            詳細
          </Button>
          <Button type="button" disabled>
            送信不可
          </Button>
        </div>
        <p className="mt-4 text-[13px] leading-[1.65] text-muted-foreground">
          1面の primary は1つ。disabled は理由を近くに置く。
        </p>

        <div className="mt-6 border-t border-border pt-6">
          {deleted ? (
            <div className="flex flex-col items-start gap-3">
              <p className="text-[15px]">削除した。次の手は取り消し。</p>
              <Button type="button" variant="secondary" onClick={() => setDeleted(false)}>
                元に戻す
              </Button>
            </div>
          ) : confirm ? (
            <div className="flex flex-col items-start gap-3">
              <p className="text-[15px]">プロジェクトを消す。やめられる。</p>
              <div className="flex flex-wrap gap-3">
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => {
                    setDeleted(true);
                    setConfirm(false);
                  }}
                >
                  消す
                </Button>
                <Button type="button" variant="secondary" onClick={() => setConfirm(false)}>
                  やめる
                </Button>
              </div>
            </div>
          ) : (
            <Button type="button" variant="danger" onClick={() => setConfirm(true)}>
              削除
            </Button>
          )}
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
          Input / Switch
        </p>
        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            setError(value.trim() ? null : "プロジェクト名を入力してください");
          }}
        >
          <label className="flex flex-col gap-2 text-[13px] text-foreground">
            プロジェクト名
            <Input
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                if (error) setError(null);
              }}
              placeholder="例: checkout-web"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "project-name-error" : undefined}
            />
          </label>
          {error ? (
            <p id="project-name-error" className="text-[13px] text-destructive">
              {error}
            </p>
          ) : null}
          <Switch checked={on} onChange={setOn} label="レビュー依頼を送る" />
          <div>
            <Button type="submit">作成する</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
