import { Request, Response } from 'express';
import ProductService from '../services/prosuct.service';

export default class ProductController {
  productservice: ProductService;

  constructor(productservice = new ProductService()) {
    this.productservice = productservice;
    this.findAll = this.findAll.bind(this);
    this.create = this.create.bind(this);
  }

  async create(req:Request, res:Response):Promise<void> {
    const product = req.body;
    const createProduct = await this.productservice.create(product);
    res.status(201).json(createProduct);
  }

  async findAll(_req:Request, res:Response):Promise<void> {
    const products = await this.productservice.findAll();
    res.status(200).json(products);
  }
}