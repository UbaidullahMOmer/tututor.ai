import { useEffect } from "react";
const useOutsideClick = (ref, callback) => {
  const handleClickOutside = (event) => {
    if (ref?.current && !ref?.current?.contains(event?.target)) {
      callback();
    }
  };
  useEffect(() => {
    document?.addEventListener("click", handleClickOutside, true);
    return () => {
      document?.removeEventListener("click", handleClickOutside, true);
    };
  });
};

export default useOutsideClick;