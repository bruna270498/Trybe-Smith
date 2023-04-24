import express from 'express';
import routerProduct from './routers/product.router';

const app = express();

app.use(express.json());
app.use('/products', routerProduct)

export default app;
