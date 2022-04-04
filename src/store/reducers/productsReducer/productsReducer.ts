import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../interfaces/IProduct';


interface ProductsSliceState {
  products: IProduct[];
  pending: boolean;
  error: string | null;
}


const initialState: ProductsSliceState = {
  products: [],
  pending: false,
  error: null,
}


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsFetchRequest(state) {
      state.pending = true;
    },

    productsFetchSuccess(state, action: PayloadAction<IProduct[]>) {
      state.pending = false;
      state.products = action.payload;
      state.error = null;
    },

    productsFetchError(state, action: PayloadAction<string>) {
      state.pending = false;
      state.error = action.payload;
    }
  }
});


export const {
  productsFetchRequest,
  productsFetchSuccess,
  productsFetchError
} = productsSlice.actions;


export default productsSlice.reducer;
