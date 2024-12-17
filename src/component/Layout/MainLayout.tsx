import { Outlet } from "react-router-dom";
import AppBar from "../Section/AppBar";
import Footer from "../Section/Footer";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <AppBar />
      <div className="mt-[90px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
