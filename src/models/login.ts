import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import Login from '../interfaces/login.iterface';

export default class LoginModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async loginUser(username:string):Promise<Login[]> {
    const [row] = await this.connection.execute<(Login & RowDataPacket)[]>(`
    SELECT *
    FROM Trybesmith.users
    WHERE username = ?`, [username]);
    return row;
  }
}
