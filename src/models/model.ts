import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection/connection';

export interface Product {
  id?: number,
  name: string,
  amount: string,
}