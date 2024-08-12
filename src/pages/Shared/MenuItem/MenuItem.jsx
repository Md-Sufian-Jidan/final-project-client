
const MenuItem = ({ item }) => {
    // console.log(item);
    const { name, image, price, recipe } = item || {};
    return (
        <div className="mx-auto flex space-x-5">
            <img className="w-24 rounded-tl-none rounded-full " src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400">{price}</p>
        </div>
    );
};

export default MenuItem;