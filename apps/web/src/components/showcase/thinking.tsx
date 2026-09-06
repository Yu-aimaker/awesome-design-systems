const personas = [
  {
    name: "実装者",
    job: "1画面のトークンと部品を決めて実装する",
    fail: "レビュー差し戻し。紫グラデや Inter が残る",
    constraint: "日本語 UI。プレビューは 390px でも見る",
  },
  {
    name: "検証者",
    job: "キャプチャ表を1周して合格/不合格を切る",
    fail: "止められない削除、フォーカス消失",
    constraint: "Tab のみ。説明を信じない",
  },
] as const;

const journey = [
  { step: "きっかけ", see: "新しい画面を書けと言われる", fear: "正本を読まずに部品を足す", signal: "目的を1文で書ける" },
  { step: "到着", see: "このページの色と書体", fear: "カタログが長い", signal: "レールで節へ跳べる" },
  { step: "理解", see: "why が節の直下", fear: "比喩で判断する", signal: "トークン名が口に出る" },
  { step: "実行", see: "部品を触る", fear: "空送信の次の手が無い", signal: "エラーが入力の下" },
  { step: "確認", see: "完了の Lottie、フォーカス", fear: "動きが止まらない", signal: "止める手段がある" },
  { step: "離脱", see: "DESIGN.md と tokens.json", fear: "ショーケースだけ真似る", signal: "semantic 名だけ持って帰る" },
] as const;

export function Thinking() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4 md:grid-cols-2">
        {personas.map((persona) => (
          <article key={persona.name} className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-[22px] leading-[1.4] tracking-[-0.015em]">{persona.name}</h3>
            <dl className="mt-4 flex flex-col gap-3 text-[15px] leading-[1.7]">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">作業</dt>
                <dd className="mt-1">{persona.job}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">失敗コスト</dt>
                <dd className="mt-1">{persona.fail}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">制約</dt>
                <dd className="mt-1">{persona.constraint}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <ol className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {journey.map((item, index) => (
          <li key={item.step} className="rounded-lg border border-border bg-card p-5">
            <p className="font-mono text-[11px] text-muted-foreground">
              {String(index + 1).padStart(2, "0")} · {item.step}
            </p>
            <p className="mt-3 text-[15px] leading-[1.7]">{item.see}</p>
            <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground">不安: {item.fear}</p>
            <p className="mt-1 text-[13px] leading-[1.65] text-foreground">合図: {item.signal}</p>
          </li>
        ))}
      </ol>

      <div className="rounded-lg border border-border bg-card p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">分岐</p>
        <ul className="mt-4 flex flex-col gap-2 text-[15px] leading-[1.7]">
          <li>成功 → 保存完了。Lottie を一度だけ。</li>
          <li>失敗 → 名前が空。エラーは入力の下。再入力。</li>
          <li>中断 → 削除確認で「やめる」。消したあとは「元に戻す」。</li>
        </ul>
      </div>
    </div>
  );
}
