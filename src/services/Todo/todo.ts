import * as grpc from "grpc";
import Postgres from "../../database/postgres";

export default async function(ctx: any) {
  if (ctx.req.id) {
    const db = new Postgres();
    db.start();
    ctx.res = db.Get(ctx.req.id);
    db.stop();
  }
}

//export async function Create(ctx: any) {
  //const db = new Postgres();
  //db.start();
  //ctx.res = db.Create(ctx.req);
  //db.stop();
//}

