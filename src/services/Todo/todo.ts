import * as grpc from "grpc";
import Postgres from "../../database/postgres";

async function Get(ctx: any) {
  if (ctx.req.id) {
    const db = new Postgres();
    db.start();
    ctx.res = db.Get(ctx.req.id);
    db.stop();
  }
}

async function Create(ctx: any) {
  const db = new Postgres();
  db.start();
  ctx.res = db.Create(ctx.req);
  db.stop();
}
