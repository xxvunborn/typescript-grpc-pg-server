import * as path from "path";
import Mali from "mali";

import Hello from "./services/Hello";

const PROTO_PATH = path.resolve(__dirname, "../../protos/helloworld.proto");

class App {
  server: any;
  port: number;

  public constructor(port: number) {
    this.port = port;
  }

  public async start(this: App) {
    this.server = new Mali(PROTO_PATH, "Greeter");
    this.server.use({ sayHello: Hello });
    this.server.start(`0.0.0.0:${this.port}`);
    console.log(`Greeter service running at: 0.0.0.0:${this.port}`);
  }
}

export default App;
