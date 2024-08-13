import FoodCart from '../../../Components/FoodCart/FoodCart';

const OrderTab = ({ items }) => {
    console.log(items);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                items?.map((food) => <FoodCart key={food._id} item={food} />)
            }
        </div>
    );
};

export default OrderTab;