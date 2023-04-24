import { Request, Response } from 'express';
import ProductService from '../services/prosuct.service';

export default class ProductController {
  productservice: ProductService;

  constructor(productservice = new ProductService()) {
    this.productservice = productservice;
    this.create = this.create.bind(this);
  }

  async create(req:Request, res:Response):Promise<void> {
    const product = req.body;
    const createProduct = await this.productservice.create(product);
    res.status(201).json(createProduct);
  }
}