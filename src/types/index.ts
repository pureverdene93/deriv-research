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

export type DataHistoryType = {
  candles: Candle[];
  echo_req: any;
  msg_type: string;
  pip_size: number;
};
