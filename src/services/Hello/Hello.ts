export default async function(ctx: any) {
  ctx.res = { message: "Hello: " + ctx.req.name };
}
