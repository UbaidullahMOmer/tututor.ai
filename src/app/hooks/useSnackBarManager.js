import { useDispatch, useSelector } from "react-redux";
import {
  hideSnackBarMessage,
  setErrorTrue,
  setSnackBarMessage,
  snackBarMessageSelector,
} from "../redux/SnackBarReducer";
export function useSnackBarManager() {
  const dispatch = useDispatch();
  const isShowSnackBar = useSelector(snackBarMessageSelector);
  const isError = useSelector((state) => state.SnackBarReducer.error);

  const fnShowSnackBar = (message, error) => {
    if (error) {
      dispatch(setErrorTrue(true));
    }
    if (message) {
      dispatch(setSnackBarMessage(message));
    }
    setTimeout(() => {
      dispatch(hideSnackBarMessage());
    }, 3000);
  };
  const fnHideSnackBar = () => {
    dispatch(hideSnackBarMessage());
  };

  return { 
    isError,
    isShowSnackBar,
    fnShowSnackBar,
    fnHideSnackBar,
  };
} 