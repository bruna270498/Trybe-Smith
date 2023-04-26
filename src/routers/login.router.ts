import { Router } from 'express';
import LoginController from '../controller/login.controller';

const routerLogin = Router();

const loginController = new LoginController();

routerLogin.post('/', loginController.loginUser);

export default routerLogin;