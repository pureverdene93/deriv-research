import { Database } from "bun:sqlite";

const db = new Database(":memory:");
const query = db.query("select 'hello world' as message");
console.log(query.get());
