import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";
import RoutesLink from "../constant/RoutesLink";
const Layout = () => {
  const location = useLocation();
  const pathName = location.pathname;
  
  const { LEADS_PAGE, LEADS_CONTRACT_PAGE, LEADS_OFFERS_PAGE, PROFILE_PAGE, MESSAGE_PAGE, FAQS } = RoutesLink;
  const withoutFooterPaths = [ LEADS_PAGE, LEADS_CONTRACT_PAGE, LEADS_OFFERS_PAGE, PROFILE_PAGE, MESSAGE_PAGE, FAQS ];

  useEffect(() => {
    const handleRouteChange = () => {
      document.getElementById("root").scrollIntoView({ behavior: "smooth" });
    };
    handleRouteChange();
  }, [pathName]);

  return (
    <>
      <Navbar />
      <Outlet />
      { !withoutFooterPaths?.some((path)=> path == pathName) && <Footer />}
    </>
  );
};

export default Layout;