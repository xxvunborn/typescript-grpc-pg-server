import { Client } from "pg";

class Postgres {
  client: any;
  user: string;
  host: string;
  port: number;
  database: string;
  password: string;

  public constructor() {
    this.user = 'postgres'
    this.host = "localhost";
    this.port = 5432;
    this.database = "test";
    this.password = "";
  }

  public async start() {
    this.client = new Client({
      user: this.user,
      host: this.host,
      database: this.database,
      password: this.password,
      port: this.port
    });

    await this.client.connect();
  }

  public async stop() {
    this.client.end();
  }

  public async Get(todo_id: number) {
    this.client.query("SELECT $1 FROM todo", todo_id, (err: any, res: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    });
  }

  public async Create(todo: any) {
    this.client.query(
      "INSERT into todo (name) VALUES ($1)",
      todo.name,
      (err: any, res: any) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      }
    );
  }
}

export default Postgres;
