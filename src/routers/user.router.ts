import { Router } from 'express';
import UserController from '../controller/user.controller';

const routerUser = Router();

const userController = new UserController();

routerUser.post('/', userController.create);

export default routerUser;