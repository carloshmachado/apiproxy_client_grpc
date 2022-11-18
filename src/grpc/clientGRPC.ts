const parseArgs = require('minimist');
const messages = require('../proto/meuprotobuf_pb');
const services = require('../proto/meuprotobuf_grpc_pb');
const grpc = require('@grpc/grpc-js');

export class GRPC {
    public static client: any
    public static request: any

    public static async createClientgRPC() {

        const argv = parseArgs(process.argv.slice(2), {
            string: 'target',
        });
        let target;
        if (argv.target) {
            target = argv.target;
        } else {
            target = '127.0.0.1:50051';
        }

        this.client = new services.MeuServiceGRPCClient(
            target,
            grpc.credentials.createInsecure()
        )

        this.request = new messages.CreateUserRequest();
        console.log('Conexão GRPC criada')
    }
}