import LoginModel from '../models/login';
import Login from '../interfaces/login.iterface';

export default class LoginService {
  model: LoginModel;

  constructor() {
    this.model = new LoginModel();
  }

  async loginUser(dados: Login) {
    const [user] = await this.model.loginUser(dados.username);
    if (!user || user.password !== dados.password) {
      throw new Error('UNAUTHORIZED');
    }
    return user;
  }
}