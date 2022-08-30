//review of what a class is

class Server {
    //instances
    port: number;
    private address: string;
    //private means it cannot be accessed outside of the class, it cannot be changed

    constructor(port: number, address: string){
        this.port = port;
        this.address = address;
    }

    startServer(){
        console.log(`Starting servr at: ${this.address}: ${this.port}`)
    }
}
const someServer = new Server(8080, 'localhost');
someServer.startServer();