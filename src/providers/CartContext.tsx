import React, {
  createContext,
  FormEvent,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import {
  ICartContext,
  IDefautProviderProps,
  IProduct,
  IProductCart,
} from './@types';
import { api } from '../services/api';
import ProductList from '../components/ProductList';

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: IDefautProviderProps) => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProductCart[]>([]);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);
  async function loadProducts() {
    const token = localStorage.getItem('@TOKEN');
    try {
      const response = await api.get('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function addToCart(productToAdd: IProductCart) {
    const existingProduct = cart.find((item) => item.id === productToAdd.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  }

  function clearCart() {
    setCart([]);
  }

  function removeFromCart(productId: number) {
    setCart(cart.filter((item) => item.id !== productId));
  }

  const value = cart.reduce(
    (contador, atual) => contador + Number(atual.price),
    0
  );

  const searchProduct = (event: any) => {
    event.preventDefault();
    const input: string = event.currentTarget.previousSibling?.value;
    console.log(product);
    if (input === '') {
      loadProducts();
    } else
      setProduct(
        product.filter((element) =>
          element.name.toLowerCase().includes(input.toLowerCase())
        )
      );
  };

  return (
    <CartContext.Provider
      value={{
        product,
        setProduct,
        cart,
        setCart,
        search,
        setSearch,
        addToCart,
        removeFromCart,
        isOpen,
        setIsOpen,
        value,
        clearCart,
        searchProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
