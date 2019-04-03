"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const protoLoader = __importStar(require("@grpc/proto-loader"));
const grpc = __importStar(require("grpc"));
const PROTO_PATH = path.resolve(__dirname, '../protos/helloworld.proto');
const pd = protoLoader.loadSync(PROTO_PATH);
const loader = grpc.loadPackageDefinition(pd);
const hello_proto = loader.helloworld;
function main() {
    const client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure());
    client.sayHello({ name: 'Chris' }, function (err, response) {
        console.log('Greetings: ' + response.message);
    });
}
main();
