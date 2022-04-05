import { ICart } from '../interfaces/ICart';


const storageName: string = 'eshop-cart';


export function saveCartToLocalStorage(cart: ICart) {
  if (!cart.cartProducts.length) return;

  localStorage.setItem(storageName, JSON.stringify(cart));
}


export function getCartFromLocalStorage(): ICart | null {
  const cart: string | null = localStorage.getItem(storageName);

  if (!cart) return null;

  return JSON.parse(cart);
}


export function removeCartFromLocalStorage() {
  localStorage.removeItem(storageName);
}
