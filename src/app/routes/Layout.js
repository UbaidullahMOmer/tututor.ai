import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RoutesLink from "../constant/RoutesLink";
import Sidebar from "../components/sidebar/Sidebar";
const Layout = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const {
    LEADS_PAGE,
    LEADS_CONTRACT_PAGE,
    LEADS_OFFERS_PAGE,
    PROFILE_PAGE,
    MESSAGE_PAGE,
    FAQS,
  } = RoutesLink;
  const withoutFooterPaths = [
    LEADS_PAGE,
    LEADS_CONTRACT_PAGE,
    LEADS_OFFERS_PAGE,
    PROFILE_PAGE,
    MESSAGE_PAGE,
    FAQS,
  ];

  useEffect(() => {
    const handleRouteChange = () => {
      document.getElementById("root").scrollIntoView({ behavior: "smooth" });
    };
    handleRouteChange();
  }, [pathName]);

  return (
    <div className="flex items-start">
      <Sidebar />
      <div className="p-[32px] w-full">
        <Outlet />
      </div>
      {/* { !withoutFooterPaths?.some((path)=> path == pathName) && <Footer />} */}
    </div>
  );
};

export default Layout;
