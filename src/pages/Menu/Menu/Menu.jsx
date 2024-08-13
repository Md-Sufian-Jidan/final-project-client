import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.png'
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu" />
            <MenuCategory />
            {/* main section */}
        </div>
    );
};

export default Menu;