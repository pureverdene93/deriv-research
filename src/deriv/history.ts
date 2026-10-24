import { PUBLIC_WS_URL } from "../config";
import { insertCandles } from "../db/candles";
import type { DataHistoryType } from "../types";

export const dataHistory = () => {
  const ws = new WebSocket(PUBLIC_WS_URL);
  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        ticks_history: "BOOM1000",
        adjust_start_time: 1,
        count: 2,
        end: "latest",
        granularity: 60,
        start: 1,
        style: "candles",
        // subscribe: 1,
      }),
    );
  };

  ws.onmessage = (event: MessageEvent) => {
    const data: DataHistoryType = JSON.parse(event.data);
    const candle = data.candles[0];
    if (!candle) return;
    const echo = data.echo_req;
    insertCandles({
      symbol: echo.ticks_history,
      timeframe: echo.granularity,
      epoch: candle?.epoch,
      open: candle?.open,
      close: candle?.close,
      high: candle?.high,
      low: candle?.low,
    });
  };
};
