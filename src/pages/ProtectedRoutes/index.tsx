import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext';

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{user ? <Outlet /> : null}</>
  );
};

export default ProtectedRoutes;
