import { Product } from '../interfaces/interfaceProduct';
import ProductModel from '../models/product';
// import connection from '../models/connection/connection';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  create(product:Product): Promise<Product> {
    return this.model.create(product);
  }
}