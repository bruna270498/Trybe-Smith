import express from 'express';
import 'express-async-errors';
import routerProduct from './routers/product.router';
import routerUser from './routers/user.router';
import routerOrder from './routers/orders.router';
import routerLogin from './routers/login.router';
import errorMiddleware from './middleware/loginValidate';

const app = express();

app.use(express.json());
app.use('/products', routerProduct);
app.use('/users', routerUser);
app.use('/orders', routerOrder);
app.use('/login', routerLogin);
app.use(errorMiddleware);

export default app;
