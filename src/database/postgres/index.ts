import { Client } from "pg";

export type postgresParams = {
  user: string
  host: string
  port: number
  database: string
  password: string
}

class Postgres  {
  client: any;
  user: string;
  host: string;
  port: number;
  database: string;
  password: string;


  public constructor(params: postgresParams) {
    this.user = params.user
    this.host = params.host
    this.port = params.port
    this.database = params.database
    this.password = params.password

    this.start()
  }

  public async start() {
    try {
      this.client = new Client({
      user: this.user,
      host: this.host,
      database: this.database,
      password: this.password,
      port: this.port
    });

      await this.client.connect();
      return
    } catch (err) {
      throw err
    }
  }

  public async stop() {
    try {
      this.client.end();
    } catch (err) {
      throw err
    }
  }
}

export default Postgres;
