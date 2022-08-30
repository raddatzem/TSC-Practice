//review of what a class is
class Server {
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    startServer() {
        console.log(`Starting servr at: ${this.address}: ${this.port}`);
    }
}
const someServer = new Server(8080, 'localhost');
someServer.startServer();
