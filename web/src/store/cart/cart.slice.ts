import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "@store/cart/cart.state";
import { CART } from "@store/slice.constants";

const setCartProduct = (
  state: any,
  action: PayloadAction<{ cartProduct: any }>,
) => ({
  ...state,
  cartProduct: action.payload.cartProduct,
});


const addCartProduct = (
  state: any,
  action: PayloadAction<{ cartProduct: any }>,
) => {
  //TODO: Reemplazar esto por adiciones inmutables, podria usar la libreria inmutability-helper o parecidas
  const products = [...state.cartProduct];
  products.push(action.payload.cartProduct);

  return {
    ...state,
    cartProduct: products,
  };
};


const metaSlice = createSlice({
  name: CART,
  initialState,
  reducers: {
    addProductCart: addCartProduct,
    setProductCart: setCartProduct,
  },
});

const { setProductCart, addProductCart } = metaSlice.actions;

export { setProductCart, addProductCart };

export default metaSlice.reducer;
