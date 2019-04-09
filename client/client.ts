import * as path from "path"
import * as protoLoader from "@grpc/proto-loader"
import * as grpc from "grpc"

const PROTO_PATH = path.resolve(__dirname, "../../protos/todo.proto")

const pd = protoLoader.loadSync(PROTO_PATH)
const loader: any = grpc.loadPackageDefinition(pd)
const todo = loader.Todo

function main() {
  const client = new todo.Todos(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

  client.getById({id: 1}, (err: any, res: any) => {
    console.log("hello")
    console.log(res.name)
  })
}

main()
