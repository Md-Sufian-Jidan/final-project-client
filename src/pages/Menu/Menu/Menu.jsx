import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../Hooks/useMenu";

import menuImg from '../../../assets/menu/banner3.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Menu = () => {
    const [menu] = useMenu();

    const offered = menu?.filter((item) => item?.category === 'offered');
    const dessert = menu?.filter((item) => item?.category === 'dessert');
    const pizza = menu?.filter((item) => item?.category === 'pizza');
    const soup = menu?.filter((item) => item?.category === 'soup');
    const salad = menu?.filter((item) => item?.category === 'salad');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu" />
            <SectionTitle subHeading={"Don't Miss"} heading={'Todays offer'} />
            {/* offered items */}
            <MenuCategory items={offered} />
            {/* dessert menu items */}
            <MenuCategory items={dessert} title={'Dessert'} coverImg={dessertImg} />
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={'Pizza'} coverImg={pizzaImg} />
            {/* salad menu items */}
            <MenuCategory items={salad} title={'Salad'} coverImg={saladImg} />
            {/* soups menu items */}
            <MenuCategory items={soup} title={'Soup'} coverImg={soupImg} />
        </div>
    );
};

export default Menu;