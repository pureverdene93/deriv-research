export type Candle = {
  epoch: number;
  open: number;
  close: number;
  high: number;
  low: number;
};

export type CandleRow = Candle & {
  symbol: string;
  timeframe: number;
};

export type echo_req = {
  ticks_history: string;
  granularity: number;
};

export type DataHistoryType = {
  candles: Candle[];
  echo_req: echo_req;
  msg_type: string;
  pip_size: number;
};
