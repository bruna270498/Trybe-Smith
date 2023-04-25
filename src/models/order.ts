import { Pool, RowDataPacket } from 'mysql2/promise';
import Orders from '../interfaces/order.interfaces';
import connection from './connection';

export default class OrderModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async findById():Promise<Orders[]> {
    const query = `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    JOIN Trybesmith.products as p ON o.id = p.order_id
    GROUP BY o.id
    `;
    const [products] = await this.connection.execute<(Orders & RowDataPacket)[]>(query);
    return products;
  }
}