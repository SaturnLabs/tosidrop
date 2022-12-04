import { useEffect, useState } from "react";
import { getQueue } from "src/services/common";

export function useQueue() {
  const [queue, setQueue] = useState(0);

  async function init() {
    const queue = await getQueue();
    setQueue(queue.pending_tx);
  }

  useEffect(() => {
    init();
  }, []);

  return queue;
}
