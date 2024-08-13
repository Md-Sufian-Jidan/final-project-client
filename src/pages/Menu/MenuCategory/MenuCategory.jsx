import useMenu from "../../../Hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";

import menuImg from '../../../assets/menu/menu-bg.png'
import saladImg from '../../../assets/menu/salad-bg.jpg'
// import drinksImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const MenuCategory = () => {

    const [menu] = useMenu();
    const popular = menu?.filter((item) => item?.category === 'popular');
    const salad = menu?.filter((item) => item?.category === 'salad');
    const drinks = menu?.filter((item) => item?.category === 'drinks');
    const dessert = menu?.filter((item) => item?.category === 'dessert');
    const pizza = menu?.filter((item) => item?.category === 'pizza');
    return (
        <div>
            <Cover img={menuImg} />
            <Cover img={saladImg} />
            <Cover img={dessertImg} />
            <Cover img={pizzaImg} />
            <Cover img={soupImg} />
        </div>
    );
};

export default MenuCategory;