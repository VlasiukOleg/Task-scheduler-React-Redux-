import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getUser, getIsLoggedIn, getIsRefreshing } from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);

  return {
    user,
    isLoggedIn,
    isRefreshing,
  };
};
