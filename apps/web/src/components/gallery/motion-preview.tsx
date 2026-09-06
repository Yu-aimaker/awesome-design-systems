'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import dynamic from 'next/dynamic';
import { Check, Play, Pause, ArrowCounterClockwise } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { tokens } from '@/lib/tokens';
import type { LottieHandle } from 'lottie-react';
const Lottie = dynamic(() => import('lottie-react').then(m => m.Lottie), {
  ssr: false
});
// Owned completion artwork: a single blue stroke, revealed once after an explicit play.
const animation = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 42,
  w: 100,
  h: 100,
  nm: 'Completion',
  ddd: 0,
  assets: [],
  layers: [{
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: 'Check',
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100
      },
      r: {
        a: 0,
        k: 0
      },
      p: {
        a: 0,
        k: [0, 0, 0]
      },
      a: {
        a: 0,
        k: [0, 0, 0]
      },
      s: {
        a: 0,
        k: [100, 100, 100]
      }
    },
    ao: 0,
    shapes: [{
      ty: 'sh',
      ks: {
        a: 0,
        k: {
          i: [[0, 0], [0, 0], [0, 0]],
          o: [[0, 0], [0, 0], [0, 0]],
          v: [[24, 50], [43, 69], [77, 31]],
          c: false
        }
      },
      nm: 'Path'
    }, {
      ty: 'st',
      c: {
        a: 0,
        k: [0.16, 0.4, 0.75, 1]
      },
      o: {
        a: 0,
        k: 100
      },
      w: {
        a: 0,
        k: 7
      },
      lc: 2,
      lj: 2,
      nm: 'Stroke'
    }, {
      ty: 'tm',
      s: {
        a: 0,
        k: 0
      },
      e: {
        a: 1,
        k: [{
          t: 0,
          s: [0],
          e: [100],
          i: {
            x: [0.2],
            y: [1]
          },
          o: {
            x: [0.2],
            y: [0]
          }
        }, {
          t: 36,
          s: [100]
        }]
      },
      o: {
        a: 0,
        k: 0
      },
      m: 1,
      nm: 'Reveal'
    }],
    ip: 0,
    op: 42,
    st: 0,
    bm: 0
  }]
};
export function MotionPreview() {
  const reduced = useReducedMotion();
  const [mode, setMode] = useState('css');
  const [done, setDone] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const lottie = useRef<LottieHandle>(null);
  useEffect(() => {
    if (reduced) {
      lottie.current?.stop();
    }
  }, [reduced]);
  function reset() {
    setDone(false);
    setPlaying(false);
    setStarted(false);
    lottie.current?.stop();
  }
  return <div className="motion-demo">
    <div className="segmented" aria-label="Motion implementation">{[['css', 'CSS tokens'], ['layout', 'Motion'], ['lottie', 'Lottie']].map(([value, label]) => <Button key={value} variant="ghost" aria-pressed={mode === value} onClick={() => {
        reset();
        setMode(value);
      }}>{label}</Button>)}</div>
    <div className="motion-stage">{mode === 'css' ? <div className={`motion-switch ${done ? 'complete' : ''}`}>
        <span>{done ? <Check size={23} /> : <span className="status-dot" />}</span>
        <strong>{done ? 'Review complete' : 'Ready to review'}</strong>
      </div> : mode === 'layout' ? <div className="motion-list">{(done ? ['Verified', 'Components', 'Foundations'] : ['Foundations', 'Components', 'Verified']).map(s => <motion.div key={s} layout={!reduced} transition={{
          duration: reduced ? 0 : tokens.motion.slow / 1000,
          ease: [0.2, 0, 0, 1]
        }}>
          <span className="status-dot" />
          {s}
          {s === 'Verified' && <Check size={17} />}
        </motion.div>)}</div> : <div className="lottie-stage">
        {reduced || !started ? <Check size={64} className={done ? '' : 'quiet'} /> : <Lottie lottieRef={lottie} src={animation} autoplay={playing} loop={false} subscriptions={{
          complete: () => {
            setPlaying(false);
            setDone(true);
          }
        }} />}
        <span>{done ? 'Complete' : playing ? 'Completing…' : 'Completion illustration'}</span>
      </div>}</div>
    <div className="control-row">
      <Button onClick={() => {
        if (mode === 'lottie') {
          if (reduced) {
            setDone(true);
            return;
          }
          if (playing) {
            lottie.current?.pause();
            setPlaying(false);
          } else {
            if (!started) setStarted(true);else if (done) {
              lottie.current?.seek({
                frame: 0
              });
              lottie.current?.play();
            } else lottie.current?.play();
            setDone(false);
            setPlaying(true);
          }
        } else setDone(!done);
      }}>
        {playing ? <Pause size={16} /> : <Play size={16} />}
        {playing ? 'Pause' : done ? 'Replay' : 'Play preview'}
      </Button>
      <Button variant="secondary" onClick={reset}><ArrowCounterClockwise size={16} />Reset</Button>
      <code>{mode === 'css' ? `${tokens.motion.base}ms · owned` : mode === 'layout' ? `${tokens.motion.slow}ms · motion/react` : 'lottie-react · one-shot'}</code>
    </div>
    <p className="caption" role="status">{reduced ? 'Reduced motion is on. State changes are immediate; illustration playback is disabled.' : 'Motion is opt-in. Your system’s reduced-motion preference is respected.'}</p>
  </div>;
}
