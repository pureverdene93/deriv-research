import { PUBLIC_WS_URL } from "./utils/url";

const dataHistory = () => {
  const ws = new WebSocket(PUBLIC_WS_URL);
  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        ticks_history: "BOOM1000",
        count: 1,
        end: "latest",
        start: 1,
        style: "candles",
        // subscribe: 1,
        granularity: 60,
      }),
    );
  };

  ws.onmessage = (event: MessageEvent) => {
    console.log(event.data);
  };
};

dataHistory();
