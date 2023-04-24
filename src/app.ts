import express from 'express';
import routerProduct from './routers/product.router';
import routerUser from './routers/user.router';

const app = express();

app.use(express.json());
app.use('/products', routerProduct);
app.use('/users', routerUser);

export default app;
