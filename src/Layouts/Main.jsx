import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Main = () => {
    return (
        <div>
            <div className="h-20">
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;