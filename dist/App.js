"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const Todo_1 = __importDefault(require("./services/Todo"));
const PROTO_PATH = path.resolve(__dirname, "../protos/todo.proto");
class App {
    constructor(port) {
        this.port = port;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.server = new mali_1.default(PROTO_PATH, "Todos");
            this.server.use({ Get: Todo_1.default });
            this.server.start(`0.0.0.0:${this.port}`);
            console.log(`Greeter service running at: 0.0.0.0:${this.port}`);
        });
    }
}
exports.default = App;
