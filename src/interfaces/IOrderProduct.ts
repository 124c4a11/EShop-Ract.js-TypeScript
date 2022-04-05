import { IProduct } from './IProduct';

export interface IOrderProduct extends Pick<
  IProduct,
  'id' | 'title' | 'price' | 'image'
> {
  quantity: number;
}
