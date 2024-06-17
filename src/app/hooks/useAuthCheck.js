import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Config } from "../constant/Index";
import { getLocalStorage, removeLocalStorage } from "../components/shared/local_storage";

const useAuthCheck = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const token = getLocalStorage(Config.userToken);
    const checkAuthentication = async () => {
      try {
        if (token) {
          const response = await fetch(`${Config.serverApiUrl}me`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response?.status === 200) {
            setStatus(200);
          } else {
            removeLocalStorage(Config.userToken);
            setStatus(401);
            const activeRoute = window.location.pathname;
            navigate("/", { state: { from: activeRoute } });
          }
        }
      } catch (error) {
        console.error("Authentication Error:", error);
        setStatus(400);
      }
    };


    if(token) {
      checkAuthentication();
    } else {
      setStatus(401);
    }
  }, [navigate]);

  return status;
};

export default useAuthCheck;
