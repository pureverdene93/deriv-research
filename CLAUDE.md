# boom-1000

Deriv-ийн BOOM1000 свечийг татаж SQLite-д хадгалаад стратегийн backtest хийх, эцэст нь арилжааны бот ажиллуулах төсөл.

## Stack
- Runtime: **Bun** (`bun <file>`, `bun test`, `bun install`, `bunx`). Node, npm, dotenv бүү хэрэглэ. Bun `.env`-ийг өөрөө уншдаг (`Bun.env.X`).
- DB: `bun:sqlite`, ORM-гүй, SQL-ийг шууд бичнэ.
- WebSocket: built-in `WebSocket`, `ws` сан бүү хэрэглэ.

## Бүтэц
```
src/
  config.ts    URL, тогтмол утгууд
  types/       хуваалцдаг төрлүүд
  deriv/       Deriv API (WebSocket, хариу шалгах)
  db/          SQL зөвхөн энд
  backtest/    engine, indicators/, strategies/, report
  scripts/     эхлэх цэгүүд (bun run …)
data/          sqlite файл (gitignore)
```
- `deriv/` ба `db/` бие биенээ import хийхгүй. Тэднийг зөвхөн `scripts/` холбоно.
- `backtest/` өгөгдөл хаанаас ирснийг мэдэхгүй, `Candle[]` л авна.
- `scripts/`-ээс бусад файл import хийхэд юу ч ажиллуулахгүй.

## Командууд
- `bun run fetch`: түүхэн свеч татах
- `bunx tsc --noEmit`: type шалгах (Bun ажиллуулахдаа type шалгадаггүй)
- `bun test`

## SQL
- Утгыг үргэлж параметрээр (`$name`) дамжуул, string залгаж бичихгүй.
- `insert`-д баганын нэрсийг заа.
- `insert or ignore` нь `not null` зөрчлийг ч чимээгүй алгасдаг тул `on conflict do nothing`-г илүүд үз.
