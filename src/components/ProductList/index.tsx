import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../providers/CartContext';

const ProductList = () => {
  const { product } = useContext(CartContext);

  return (
    <StyledProductList>
      {product.map((produto) => {
        console.log();
        return (
          <ProductCard
            name={produto.name}
            img={produto.img}
            category={produto.category}
            id={produto.id}
            price={produto.price}
            key={produto.id}
          />
        );
      })}
    </StyledProductList>
  );
};
export default ProductList;
