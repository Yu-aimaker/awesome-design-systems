'use client';

import { useState } from 'react';
import { AssistantRuntimeProvider, ComposerPrimitive, MessagePrimitive, ThreadPrimitive, useExternalStoreRuntime, type ThreadMessageLike } from '@assistant-ui/react';
import { ArrowUp, ArrowCounterClockwise } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
type Message = {
  role: 'user' | 'assistant';
  content: string;
};
const initial: Message[] = [{
  role: 'user',
  content: 'Which token should I use for a primary action?'
}, {
  role: 'assistant',
  content: 'Use primary for the action and primaryForeground for its label. The same names resolve to blue in both themes.'
}];
const convertMessage = (m: Message): ThreadMessageLike => ({
  role: m.role,
  content: [{
    type: 'text',
    text: m.content
  }]
});
function UserMessage() {
  return <MessagePrimitive.Root className="chat-message user-message">
    <span className="message-label">You</span>
    <MessagePrimitive.Parts />
  </MessagePrimitive.Root>;
}
function AssistantMessage() {
  return <MessagePrimitive.Root className="chat-message assistant-message">
    <span className="message-label">AwesomeDS · local example</span>
    <MessagePrimitive.Parts />
  </MessagePrimitive.Root>;
}
export function ChatPreview() {
  const [messages, setMessages] = useState<Message[]>(initial);
  const [backup, setBackup] = useState<Message[]>([]);
  const runtime = useExternalStoreRuntime({
    messages,
    isRunning: false,
    convertMessage,
    onNew: async message => {
      const part = message.content.find(p => p.type === 'text');
      if (!part || part.type !== 'text' || !part.text.trim()) return;
      setMessages(v => [...v, {
        role: 'user',
        content: part.text
      }, {
        role: 'assistant',
        content: /motion|動/i.test(part.text) ? 'Use owned CSS tokens for simple changes: 120, 180, or 280ms. Use motion/react for layout and lottie-react for completion. Respect reduced motion.' : /font|type|文字/i.test(part.text) ? 'Use Geist for Latin, Noto Sans JP for Japanese, and Geist Mono for code. Body text is 16px with a 1.75 line height.' : 'This local example uses semantic tokens. Read Color, Typography, or Motion in the docs for the full rules; no model API is connected.'
      }]);
    }
  });
  return <div>
    <AssistantRuntimeProvider runtime={runtime}><ThreadPrimitive.Root className="chat">
        <div className="chat-header"><span className="status-dot" /> Token assistant <span className="tiny-tag">Local demo</span></div>
        <ThreadPrimitive.Viewport className="chat-viewport">
          <ThreadPrimitive.Empty><p>No messages yet. Ask about a token to start.</p></ThreadPrimitive.Empty>
          <ThreadPrimitive.Messages components={{
            UserMessage,
            AssistantMessage
          }} />
        </ThreadPrimitive.Viewport>
        <ComposerPrimitive.Root className="composer">
          <ComposerPrimitive.Input aria-label="Message" placeholder="Ask about color, type, or motion…" />
          <ComposerPrimitive.Send className="button button-default icon-button" aria-label="Send message"><ArrowUp size={20} /></ComposerPrimitive.Send>
        </ComposerPrimitive.Root>
      </ThreadPrimitive.Root></AssistantRuntimeProvider>
    <div className="control-row chat-actions">
      <Button variant="ghost" disabled={!messages.length} onClick={() => {
        setBackup(messages);
        setMessages([]);
      }}>Clear thread</Button>
      <Button variant="ghost" disabled={!backup.length} onClick={() => {
        setMessages(backup);
        setBackup([]);
      }}><ArrowCounterClockwise size={16} />Restore</Button>
    </div>
  </div>;
}
