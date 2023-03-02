import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';

const CartProductList = () => {
  const { cart, value, clearCart } = useContext(CartContext);

  return (
    <StyledCartProductList>
      <ul>
        {cart.length > 0 &&
          cart.map((cartProduct) => (
            <CartProductCard cartProduct={cartProduct} key={cartProduct.id} />
          ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>
          R$ {value.toFixed(2)}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={clearCart}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};
export default CartProductList;
