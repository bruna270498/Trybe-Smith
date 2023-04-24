import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { Product } from '../interfaces/interfaceProduct';

export default class ProductModel {
  connection: Pool;
  
  constructor() {
    this.connection = connection;
  }

  async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    console.log(name);
    return { id: insertId, ...product };
  }
}
