import express from 'express';
import cors from 'cors'

import routes from './routes';

//importing database
import './database'

class App{
    constructor(){
        //initializing express for the server
        this.server = express();

        //initializing middlewares
        this.middlewares()

        //initializing routes
        this.routes();
    }

    //creating middlewares
    middlewares(){
        this.server.use(cors());
        this.server.use(express.json()); //expect to receive a .json data
    }
    //creating routes
    routes(){
        this.server.use(routes);//all routes are imported
    }

}

export default new App().server;