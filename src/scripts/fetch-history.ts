import { insertCandles } from "../db";
import { fetchCandles } from "../deriv/history";
import { isClosed } from "../candles";

const res = await fetchCandles();

// fetch and insert db
const insertMany = () => {
  const echo = res.echo_req;
  const candles = res.candles;
  const validCandles = candles.filter((c) => {
    return isClosed(c.epoch);
  });

  insertCandles(echo.ticks_history, echo.granularity, validCandles);
};

insertMany();
