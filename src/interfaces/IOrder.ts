import { IOrderProduct } from './IOrderProduct';


export interface IOrder {
  cartProducts: IOrderProduct[]
  totalQuantity: number;
  totalPrice: number;
  createdAt: number;
}
