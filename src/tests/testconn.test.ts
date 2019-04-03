import * as path from "path";
import Mali from "mali";
import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";
import App from "../App";

class Client {
  public client: any;

  public async start() {
    const PROTO_PATH = path.resolve(
      __dirname,
      "../..//protos/helloworld.proto"
    );
    const pd = protoLoader.loadSync(PROTO_PATH);
    const loader: any = grpc.loadPackageDefinition(pd);
    const hello_proto = loader.helloworld;

    this.client = new hello_proto.Greeter(
      "localhost:50051",
      grpc.credentials.createInsecure()
    );
  }
}

describe("test connection", function() {
  it("Greeting person name", function() {
    //
    // Server implementation
    const app = new App(50051);
    app.start().then(() => {
      const name = "Chris";
      let client = new Client();
      client.start();

      client.client.sayHello({ name: name }, function(err: any, response: any) {
        expect(response.message).toBe("Hello: " + name);
      });
    });
  });
});
