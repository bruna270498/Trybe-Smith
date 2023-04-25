import express from 'express';
import routerProduct from './routers/product.router';
import routerUser from './routers/user.router';
import routerOrder from './routers/orders.router';

const app = express();

app.use(express.json());
app.use('/products', routerProduct);
app.use('/users', routerUser);
app.use('/orders', routerOrder);

export default app;
