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

export type EchoReq = {
  ticks_history: string;
  granularity: number;
};

export type DataHistoryType = {
  candles: Candle[];
  echo_req: EchoReq;
  msg_type: string;
  pip_size: number;
};
