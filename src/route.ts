import { Router } from 'express'
import ProxyController from './controller/ProxyController'

const routes = Router()

routes.post('/v1/proxyapi', ProxyController.proxyapi)
routes.post('/v1/proxygrpc', ProxyController.proxygrpc)

export default routes