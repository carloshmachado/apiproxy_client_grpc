import express from 'express'
import status from './status'
import routes from './route'
import bodyParser from 'body-parser'
import { GRPC } from '../src/grpc/clientGRPC'

class App {
    express: express.Application

    constructor() {
        this.express = express()
        this.status()
        this.middlewares()
        this.routes()
        this.createGRPC()
    }

    private middlewares() {
        this.express.use(express.json({ limit: '20MB' }))
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
    }

    private routes() {
        this.express.use(routes)
    }

    private status() {
        this.express.use(status)
    }

    private createGRPC() {
        GRPC.createClientgRPC()
    }
}

export default new App().express