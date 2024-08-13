import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {

    return (
        <>
            {title && <Cover img={coverImg} title={title} />}
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 my-10 mx-2'>
                {
                    items?.map((item) => <MenuItem key={item?._id} item={item} />)
                }
            </div>
        </>
    );
};

export default MenuCategory;