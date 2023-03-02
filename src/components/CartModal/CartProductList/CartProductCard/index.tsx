import { MdDelete } from 'react-icons/md';

import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { ICartProductCard } from '../../../../providers/@types';
import { CartContext } from '../../../../providers/CartContext';

const CartProductCard = ({ cartProduct }: ICartProductCard) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={cartProduct.img} alt='Hamburguer' />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {cartProduct.name}
        </StyledTitle>
        <button
          type='button'
          aria-label='Remover'
          onClick={() => removeFromCart(cartProduct.id)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};
export default CartProductCard;
