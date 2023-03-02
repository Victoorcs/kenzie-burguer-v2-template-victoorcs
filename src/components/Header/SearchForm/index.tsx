import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../providers/CartContext';

const SearchForm = () => {
  const { searchProduct } = useContext(CartContext);
  return (
    <StyledSearchForm>
      <input type='text' placeholder='Digitar pesquisa' />
      <StyledButton
        type='button'
        $buttonSize='medium'
        $buttonStyle='green'
        onClick={(event) => searchProduct(event)}
      >
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};
export default SearchForm;
