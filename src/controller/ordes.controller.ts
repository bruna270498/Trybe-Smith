import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService: OrderService;

  constructor(orderService = new OrderService()) {
    this.orderService = orderService;
    this.findById = this.findById.bind(this);
  }

  async findById(req:Request, res: Response):Promise<void> {
    const orders = await this.orderService.findById();
    res.status(200).json(orders);
  }
}