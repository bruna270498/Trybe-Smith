import { Router } from 'express';
import OrderController from '../controller/ordes.controller';

const routerOrder = Router();

const orderController = new OrderController();

routerOrder.get('/', orderController.findById);

export default routerOrder;
