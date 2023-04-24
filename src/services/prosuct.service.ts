import { Product } from '../interfaces/interfaceProduct';
import ProductModel from '../models/product';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  create(product:Product): Promise<Product> {
    return this.model.create(product);
  }

  async findAll():Promise<Product[]> {
    return this.model.findAll();
  }
}