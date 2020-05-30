import { useEffect, useState } from "react";

export function useDidMount() {
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    setDidMount(true);

    return () => setDidMount(false);
  }, []);

  return { didMount };
}
