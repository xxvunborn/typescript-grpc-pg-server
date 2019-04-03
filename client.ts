import * as path from "path";
import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "grpc";

const PROTO_PATH = path.resolve(__dirname, "../protos/helloworld.proto");

const pd = protoLoader.loadSync(PROTO_PATH);
const loader: any = grpc.loadPackageDefinition(pd);
const hello_proto = loader.helloworld;

function main() {
  const client = new hello_proto.Greeter(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

  client.sayHello({ name: "Chris" }, function(err: any, response: any) {
    console.log("Greetings: " + response.message);
  });
}

main();
