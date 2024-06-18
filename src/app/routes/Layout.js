import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
const Layout = () => {
  const location = useLocation();
  const pathName = location.pathname;


  useEffect(() => {
    const handleRouteChange = () => {
      document.getElementById("root").scrollIntoView({ behavior: "smooth" });
    };
    handleRouteChange();
  }, [pathName]);

  return (
    <div className="flex items-start w-full h-full">
      <Sidebar />
      <div className="  w-full">
        <Outlet />
      </div>
      {/* { !withoutFooterPaths?.some((path)=> path == pathName) && <Footer />} */}
    </div>
  );
};

export default Layout;
