import { IOrder } from './IOrder';


export type ICart = Omit<IOrder, 'createdAt'>;
