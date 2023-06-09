import { Router } from 'express';
import ProductController from '../controller/product.controller';

const routerProduct = Router();

const productCrontoller = new ProductController();

routerProduct.post('/', productCrontoller.create);
routerProduct.get('/', productCrontoller.findAll);

export default routerProduct;
