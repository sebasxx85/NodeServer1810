import express from 'express'
import routesProducts from '../routes/products'
import routesUsers from '../routes/user'

class Server {
    private app: express.Application;
    private port: string

    constructor() {
        this.app = express(),
    //  this.port = '3001'
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("corriendo en puerto: " + this.port);
        })
    }

    routes(){
        this.app.use('/api/products', routesProducts),
        this.app.use('/api/user', routesUsers)
    }

    midlewares(){
        this.app.use(express.json())
    }

}
export default Server

