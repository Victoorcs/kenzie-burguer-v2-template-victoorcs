import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IUserContext,
  IDefautProviderProps,
  IUser,
  IRegisterFormValue,
  ILoginFormValue,
} from './@types';
import { api } from '../services/api';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefautProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const userLoad = async () => {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      try {
        const response = await api.get('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        navigate('/shop');
      } catch (error) {
        console.log(error);
        localStorage.removeItem('@TOKEN');
        navigate('/');
      }
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    userLoad();
  }, []);

  const userRegister = async (formData: IRegisterFormValue) => {
    try {
      const response = await api.post('/users', formData);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      navigate('/shop');
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (formData: ILoginFormValue) => {
    try {
      const response = await api.post('/login', formData);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      navigate('/shop');
    } catch (error) {
      console.log(error);
    }
  };
  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLoad,
        userRegister,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
