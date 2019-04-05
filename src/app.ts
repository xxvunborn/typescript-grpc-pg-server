import * as path from "path";
import Mali from "mali";

import todo from "./services/Todo";

const PROTO_PATH = path.resolve(__dirname, "../protos/todo.proto");

class App {
  server: any;
  port: number;

  public constructor(port: number) {
    this.port = port;
  }

  public async start(this: App) {
    this.server = new Mali(PROTO_PATH, "Todos");
    this.server.use({Get: todo});
    this.server.start(`0.0.0.0:${this.port}`);
    console.log(`Greeter service running at: 0.0.0.0:${this.port}`);
  }
}

export default App;
