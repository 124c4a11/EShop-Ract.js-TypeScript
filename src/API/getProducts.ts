import axios from 'axios';
import { IProduct } from '../interfaces/IProduct';


export async function getProducts(): Promise<IProduct[]> {
  const { data } = await axios.get<IProduct[]>('https://fakestoreapi.com/products');

  return data;
}
