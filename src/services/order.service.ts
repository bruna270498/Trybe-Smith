import OrderModel from '../models/order';
import Orders from '../interfaces/order.interfaces';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  async findById():Promise<Orders[]> {
    return this.model.findById();
  }
}