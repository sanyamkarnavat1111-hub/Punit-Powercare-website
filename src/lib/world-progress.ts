import { useEffect, useState } from "react";

type Listener = (progress: number, index: number) => void;

let progress = 0;
let index = 0;
const listeners = new Set<Listener>();

export function setWorldProgress(nextProgress: number, nextIndex: number) {
  progress = nextProgress;
  index = nextIndex;
  listeners.forEach((l) => l(progress, index));
}

export function useWorldProgress() {
  const [state, setState] = useState({ progress, index });
  useEffect(() => {
    const l: Listener = (p, i) => setState({ progress: p, index: i });
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  }, []);
  return state;
}
