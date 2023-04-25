import { Request, Response } from 'express';
import UserService from '../services/user.service';
import generatoToken from '../token/token';

export default class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response):Promise<void> {
    const user = req.body;
    const { username, id } = req.body;
    const userDado = { id, username };
    const token = generatoToken(userDado);
    await this.userService.create(user);
    res.status(201).json({ token });
  }
}