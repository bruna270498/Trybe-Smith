import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response):Promise<void> {
    const user = req.body;
    const createUser = await this.userService.create(user);
    res.status(201).json(createUser);
  }
}