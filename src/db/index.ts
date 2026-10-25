import type { Candle } from "../types";
import { db } from "./db";

export const getCanlesByEpoch = (epoch: number) => {
  if (!epoch) throw new Error("epoch is missing");
  const rows = db
    .query(`select * from candles_boom1000 where (epoch = $epoch)`)
    .all({
      $epoch: epoch,
    });
  return { rows };
};

export const insertCandles = (
  symbol: string,
  timeframe: number,
  candles: Candle[],
) => {
  const stmt = db.query(
    `
    insert or ignore into candles_boom1000 
    (symbol, timeframe, epoch, open, close, high, low)
    values ($symbol, $timeframe, $epoch, $open, $close, $high, $low)
    `,
  );

  const insertMany = db.transaction(() => {
    let insertedRows = 0;
    for (const c of candles) {
      const res = stmt.run({
        $symbol: symbol,
        $timeframe: timeframe,
        $epoch: c.epoch,
        $open: c.open,
        $close: c.close,
        $high: c.high,
        $low: c.low,
      });
      insertedRows += res.changes;
    }
    return insertedRows;
  });

  return insertMany();
};
