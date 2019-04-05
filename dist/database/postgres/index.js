"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
class Postgres {
    constructor() {
        this.user = 123;
        this.host = "localhost";
        this.port = 5432;
        this.database = "test";
        this.password = "";
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.client = new pg_1.Client({
                user: this.user,
                host: this.host,
                database: this.database,
                password: this.password,
                port: this.port
            });
            yield this.client.connect();
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            this.client.end();
        });
    }
    Get(todo_id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.client.query("SELECT $1 FROM todo", todo_id, (err, res) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                }
            });
        });
    }
    Create(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            this.client.query("INSERT into todo (name) VALUES ($1)", todo.name, (err, res) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(res);
                }
            });
        });
    }
}
exports.default = Postgres;
