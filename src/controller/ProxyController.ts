import axios from 'axios'
import { Request, Response } from 'express'
import { GRPC } from '../grpc/clientGRPC'

class ProxyController {
    public async proxyapi(req: Request, res: Response): Promise<Response> {

        const name = req.body.name as string
        const age = Number(req.body.age) as number

        const result = await axios({
            method: 'post',
            url: 'http://localhost:3001/v1/createuser',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                name: name,
                age: age
            }
        });

        return res.status(200).json({ message: result.data.message })
    }

    public async proxygrpc(req: Request, res: Response): Promise<Response> {

        const name = req.body.name as string
        const age = Number(req.body.age) as number

        GRPC.request.setName(name)
        GRPC.request.setAge(age)

        const result: any = await new Promise((resolve, reject) => {
            GRPC.client.createUser(GRPC.request, function (err: any, response: any) {
                if (err) {
                    console.log('erro: ' + err);
                    reject(err);
                    return;
                }

                const result = {
                    code: response.getCode(),
                    message: response.getMessage()
                }
                resolve(result);

            });
        });
        return res.status(200).json({ message: result.message })
    }
}

export default new ProxyController()