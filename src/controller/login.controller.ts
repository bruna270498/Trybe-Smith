import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import generatoToken from '../token/token';

export default class LoginController {
  loginService: LoginService;

  constructor(loginService = new LoginService()) {
    this.loginService = loginService;
    this.loginUser = this.loginUser.bind(this);
  }

  async loginUser(req:Request, res:Response) {
    const { password, username } = req.body;
    if (!username && typeof username !== 'string') {
      return res.status(400).json({ message: '"username" is required' }); 
    }
    if (!password && typeof password !== 'string') { 
      return res.status(400).json({ message: '"password" is required' }); 
    }
    const result = await this.loginService.loginUser(req.body);
    const { id } = result;
    const token = generatoToken({ id, username });
    return res.status(200).json({ token });
  }
}