import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { User } from '../interfaces/userInterface';

export default class UserModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(user: User):Promise<User> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ? )',
      [username, vocation, level, password],
    );
    console.log(insertId, user);
    return { id: insertId, ...user };
  }
}