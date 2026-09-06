"use client";

import { useState } from "react";
import {
  AssistantRuntimeProvider,
  ComposerPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
  useExternalStoreRuntime,
  type AppendMessage,
  type ThreadMessageLike,
} from "@assistant-ui/react";
import { Button } from "@/components/ui/button";

type DemoMessage = { role: "user" | "assistant"; content: string };

const seed: DemoMessage[] = [
  { role: "user", content: "この画面の決定色はどれ？" },
  {
    role: "assistant",
    content: "semantic の primary（青）。保存や次へにだけ使う。ナビ全体には塗らない。Funnel Orange は任意で1–2。",
  },
];

const convertMessage = (message: DemoMessage): ThreadMessageLike => ({
  role: message.role,
  content: [{ type: "text", text: message.content }],
});

function replyTo(input: string): string {
  const text = input.trim();
  if (!text) return "空の送信です。本文を入れてください。";
  if (/色|カラー|プライマリ|primary|color|blue|青|forest|funnel|オレンジ/i.test(text)) {
    return "primary は青。Funnel Orange は任意で1面に最大1–2。部品は semantic 名だけ使う。Hex を JSX に書かない。";
  }
  if (/書体|フォント|font|geist|noto/i.test(text)) {
    return "Latin は Geist、日本語は Noto Sans JP。本文 16 / 行間 1.75。";
  }
  return `受け取った: 「${text}」。これはローカルデモで、モデルAPIは呼ばない。`;
}

function ThreadView() {
  return (
    <ThreadPrimitive.Root className="flex h-[420px] flex-col rounded-lg border border-border bg-card">
      <ThreadPrimitive.Viewport className="flex-1 overflow-y-auto px-4 py-4">
        <ThreadPrimitive.Empty>
          <p className="px-2 py-6 text-[15px] leading-[1.7] text-muted-foreground">
            まだ会話がない。トークン名を入れて送る。
          </p>
        </ThreadPrimitive.Empty>
        <ThreadPrimitive.Messages
          components={{
            UserMessage: () => (
              <MessagePrimitive.Root className="mb-3 ml-10 rounded-md bg-primary px-3 py-2 text-[14px] leading-[1.65] text-primary-foreground">
                <MessagePrimitive.Parts />
              </MessagePrimitive.Root>
            ),
            AssistantMessage: () => (
              <MessagePrimitive.Root className="mb-3 mr-10 rounded-md border border-border bg-background px-3 py-2 text-[14px] leading-[1.65] text-foreground">
                <MessagePrimitive.Parts />
              </MessagePrimitive.Root>
            ),
          }}
        />
      </ThreadPrimitive.Viewport>
      <ComposerPrimitive.Root className="flex gap-2 border-t border-border p-3">
        <ComposerPrimitive.Input
          placeholder="トークンについて聞く"
          className="h-10 flex-1 rounded-md border border-input bg-background px-3 text-[14px] text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        />
        <ComposerPrimitive.Send className="inline-flex h-10 items-center rounded-md bg-primary px-3 text-[14px] text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          送る
        </ComposerPrimitive.Send>
      </ComposerPrimitive.Root>
    </ThreadPrimitive.Root>
  );
}

export function ChatThread() {
  const [messages, setMessages] = useState<DemoMessage[]>(seed);
  const [isRunning, setIsRunning] = useState(false);

  const runtime = useExternalStoreRuntime({
    isRunning,
    messages,
    convertMessage,
    onNew: async (message: AppendMessage) => {
      const part = message.content[0];
      if (part?.type !== "text") return;
      const input = part.text;
      setMessages((prev) => [...prev, { role: "user", content: input }]);
      setIsRunning(true);
      await new Promise((resolve) => setTimeout(resolve, 280));
      setMessages((prev) => [...prev, { role: "assistant", content: replyTo(input) }]);
      setIsRunning(false);
    },
  });

  return (
    <div>
      <AssistantRuntimeProvider runtime={runtime}>
        <ThreadView />
      </AssistantRuntimeProvider>
      <div className="mt-3 flex flex-wrap gap-3">
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setMessages((prev) => {
              if (prev.length < 2) return [];
              return prev.slice(0, -2);
            });
          }}
          disabled={messages.length === 0 || isRunning}
        >
          直前を戻す
        </Button>
        <Button type="button" variant="secondary" onClick={() => setMessages([])} disabled={messages.length === 0}>
          履歴を消す
        </Button>
      </div>
      <p className="mt-2 text-[13px] leading-[1.65] text-muted-foreground" aria-live="polite">
        {isRunning ? "返信を組み立てている。" : messages.length === 0 ? "空。Composer が次の手。" : null}
      </p>
    </div>
  );
}
