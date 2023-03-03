export interface IDefautProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}
export interface IRegisterFormValue {
  email: string;
  password: string;
  name: string;
}
export interface ILoginFormValue {
  email: string;
  password: string;
}
export interface IUserContext {
  user: IUser | null;
  userLoad: () => Promise<void>;
  userRegister: (formData: IRegisterFormValue) => Promise<void>;
  userLogin: (formData: ILoginFormValue) => Promise<void>;
  userLogout: () => void;
}
export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}
export interface IProductCart {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantity: number;
}
export interface ICartProductCard {
  cartProduct: IProductCart;
}
export interface ICartContext {
  product: IProduct[] | [];
  setProduct: React.Dispatch<React.SetStateAction<IProduct[] | []>>;
  cart: IProductCart[];
  setCart: React.Dispatch<React.SetStateAction<IProductCart[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  addToCart: (productToAdd: IProductCart) => void;
  removeFromCart: (productId: number) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value: number;
  clearCart(): void;
  searchProduct: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
