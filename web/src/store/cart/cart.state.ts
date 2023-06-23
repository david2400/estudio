import { ICartState } from "@store/cart/cart.interface";

const initialState: ICartState = {
  cartProduct: [],
  subtotal: 0,
};

export { initialState };
