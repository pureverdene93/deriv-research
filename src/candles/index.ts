import type { CandleRow } from "../types";

export const isClosed = (epoch: number) => {
  const now = Date.now() / 1000;
  const validEpoch = epoch + 60;
  if (validEpoch < now) {
    return true;
  } else {
    return false;
  }
};

export const convertIntoMultipleTimeframe = (
  rows: CandleRow[],
  timeframe: number,
) => {
  const isValidTimeframe = timeframe / 60;

  const firstEpoch = rows[0]?.epoch;
};
