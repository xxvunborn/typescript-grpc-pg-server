declare class App {
    server: any;
    port: number;
    constructor(port: number);
    start(this: App): Promise<void>;
}
export default App;
