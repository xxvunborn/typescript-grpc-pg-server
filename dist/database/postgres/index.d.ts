declare class Postgres {
    client: any;
    user: string;
    host: string;
    port: number;
    database: string;
    password: string;
    constructor();
    start(): Promise<void>;
    stop(): Promise<void>;
    Get(todo_id: number): Promise<void>;
    Create(todo: any): Promise<void>;
}
export default Postgres;
