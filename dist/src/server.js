"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const mali_1 = __importDefault(require("mali"));
const PROTO_PATH = path.resolve(__dirname, "../../protos/helloworld.proto");
const HOST = "0.0.0.0:50051";
function sayHello(ctx) {
    ctx.res = { message: "Hello " + ctx.req.name };
}
function main() {
    const app = new mali_1.default(PROTO_PATH, "Greeter");
    app.use({ sayHello });
    app.start(HOST);
    console.log(`Greeter service running at: ${HOST}`);
}
main();
