import { Database } from "bun:sqlite";

export const db = new Database("data/deriv.sqlite");

const newTables = () => {
  db.query(
    `
    create table if not exists candles_boom1000 (
      symbol text not null,
      timeframe integer not null,
      epoch integer not null,
      open real not null,
      close real not null,
      high real not null,
      low real not null,
    primary key (symbol, timeframe, epoch)
  )
    `,
  ).run();
};

newTables();
