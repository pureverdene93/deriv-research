import type { DataHistoryType } from "../types";
import { BOOM_1000, PUBLIC_WS_URL } from "../config";

export const fetchCandles = (): Promise<DataHistoryType> =>
  new Promise((resolve, reject) => {
    const ws = new WebSocket(PUBLIC_WS_URL);
    const parameters = {
      ticks_history: BOOM_1000,
      adjust_start_time: 1,
      count: 2,
      end: "latest",
      granularity: 60,
      start: 1,
      style: "candles",
    };
    ws.onopen = () => {
      ws.send(JSON.stringify(parameters));
    };
    ws.onmessage = (event: MessageEvent) => {
      const data: DataHistoryType = JSON.parse(event.data);
      ws.close();
      resolve(data);
    };
    ws.onerror = (err) => {
      reject(`new error: ${err}`);
    };
  });
