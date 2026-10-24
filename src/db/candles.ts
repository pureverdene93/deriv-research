import type { CandleRow } from "../types";
import { db } from "./db";

export const insertCandles = (row: CandleRow) => {
  db.query(
    `
    insert or ignore into candles_boom1000 
    (symbol, timeframe, epoch, open, close, high, low)
    values ($symbol, $timeframe, $epoch, $open, $close, $high, $low)
    `,
  ).run({
    $symbol: row.symbol,
    $timeframe: row.timeframe,
    $epoch: row.epoch,
    $open: row.open,
    $close: row.close,
    $high: row.high,
    $low: row.low,
  });
};
