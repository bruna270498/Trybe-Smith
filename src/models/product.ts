import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Product } from '../interfaces/interfaceProduct';

export default class ProductModel {
  connection: Pool;
  
  constructor() {
    this.connection = connection;
  }

  async findAll():Promise<Product[]> {
    const [rows] = await this.connection.execute<(Product & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.products');
    return rows;
  }

  async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }
}
