import * as  path from 'path'
import Mali from 'mali'

const PROTO_PATH = path.resolve(__dirname, "../../protos/helloworld.proto")
const HOST = "0.0.0.0:50051"

function sayHello(ctx: any) {
  ctx.res = { message: "Hello " + ctx.req.name }
}

function main () {
  const app = new Mali(PROTO_PATH, "Greeter")
  app.use({sayHello})
  app.start(HOST)
  console.log(`Greeter service running at: ${HOST}`)
}

main()


