/* eslint-disable @typescript-eslint/no-explicit-any */
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef } from 'react';

export default function useInterval(callback: (args?: any) => any, delay: number) {
  const savedCallback = useRef<(args?: any) => any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback?.current?.();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
}
