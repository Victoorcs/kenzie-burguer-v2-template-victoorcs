import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';
import { IProduct } from '../../../providers/@types';

const ProductCard = ({ category, img, name, price, id }: IProduct) => {
  const { addToCart } = useContext(CartContext);

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>
          R$: {price.toFixed(2)}
        </StyledParagraph>
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          onClick={() =>
            addToCart({ category, img, name, price, id, quantity: 1 })
          }
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};
export default ProductCard;
