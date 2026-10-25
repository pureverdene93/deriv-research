import { insertCandles } from "../db";
import { fetchCandles } from "../deriv/history";

const res = await fetchCandles();

export const insertMany = () => {
  const echo = res.echo_req;
  const candles = res.candles;
  insertCandles(echo.ticks_history, echo.granularity, candles);
  console.log(res);
};

insertMany();
