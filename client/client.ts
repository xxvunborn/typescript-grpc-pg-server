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

  /* EXAMPLES FOR CLIENT GRPC
   * In this examples we test the connections for GRPC and the DB
   * Uncomment one for testing
  */

  //client.getById({ id: "1" }, (err: any, res: any) => {
    //console.log(res)
  //})

  //client.getAll({}, (err: any, res: any) => {
    //console.log(res)
  //})
  //
  //client.create({ name: 'Go home' }, (err: any, res: any) => {
    //console.log(res)
  //})

  //client.update({id: 2, isDone: true }, (err: any, res: any) => {
    //console.log(res)
  //})

  //client.delete({id: 15}, (err: any, res: any) => {
    //console.log(res)
  //})
}

main()
