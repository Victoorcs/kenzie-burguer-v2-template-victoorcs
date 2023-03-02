import { CartProvider } from './providers/CartContext';
import { UserProvider } from './providers/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <>
    <GlobalStyles />
    <UserProvider>
      <CartProvider>
        <Router />
      </CartProvider>
    </UserProvider>
  </>
);

export default App;
