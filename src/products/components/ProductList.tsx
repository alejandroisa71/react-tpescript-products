import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { ProductItem } from './ProductItem';

export const ProductList = () => {
  const { productState } = useContext(ProductContext);
  const { products } = productState;
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
