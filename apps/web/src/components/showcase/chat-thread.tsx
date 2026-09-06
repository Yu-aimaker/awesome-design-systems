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

type DemoMessage = { role: "user" | "assistant"; content: string };

const seed: DemoMessage[] = [
  { role: "user", content: "この画面の決定色はどれ？" },
  {
    role: "assistant",
    content: "semantic の primary（森）。保存や次へにだけ使う。ナビ全体には塗らない。",
  },
];

const convertMessage = (message: DemoMessage): ThreadMessageLike => ({
  role: message.role,
  content: [{ type: "text", text: message.content }],
});

function replyTo(input: string): string {
  const text = input.trim();
  if (!text) return "空の送信です。本文を入れてください。";
  if (/色|カラー|プライマリ|primary|color|forest/i.test(text)) {
    return "primary は forest。部品は semantic 名だけ使う。Hex を JSX に書かない。";
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
          className="h-10 flex-1 rounded-md border border-input bg-background px-3 text-[14px] text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
        />
        <ComposerPrimitive.Send className="inline-flex h-10 items-center rounded-md bg-primary px-3 text-[14px] text-primary-foreground">
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
    <AssistantRuntimeProvider runtime={runtime}>
      <ThreadView />
    </AssistantRuntimeProvider>
  );
}
