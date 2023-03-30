import { Product, ProductState } from '../interfaces/interfaces';

type ProductAction =
  | { type: 'addProduct'; payload: Product }
  | { type: 'toggleProduct'; payload: { id: string } };

export const productReducer = (state: ProductState, action: ProductAction) => {
  switch (action.type) {
    case 'addProduct':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    

    default:
      return state;
  }
};
