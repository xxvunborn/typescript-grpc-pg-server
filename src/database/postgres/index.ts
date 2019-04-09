import { Client } from "pg";

class Postgres {
  client: any;
  user: string;
  host: string;
  port: number;
  database: string;
  password: string;


  public constructor() {
    this.user = "acidlabs"
    this.host = "localhost";
    this.port = 5432;
    this.database = "test";
    this.password = "";

    this.start()
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
}

export default Postgres;
