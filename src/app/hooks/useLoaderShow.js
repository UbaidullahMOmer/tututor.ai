import { useDispatch, useSelector } from 'react-redux';
import { showLoader, hideLoader, setIsLoading, selectedIsLoading } from '../redux/LoaderReducer';

function useLoaderShow() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectedIsLoading);

  const show = () => {
    dispatch(showLoader());
  };

  const hide = () => {
    dispatch(hideLoader());
  };

  const toggle = () => {
    dispatch(setIsLoading(!isLoading));
  };

  return {
    isLoading,
    show,
    hide,
    toggle,
  };
}

export default useLoaderShow;
