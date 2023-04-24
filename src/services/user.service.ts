import { User } from '../interfaces/userInterface';
import UserModel from '../models/user';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  async create(user: User):Promise<User> {
    return this.model.create(user);
  }
}