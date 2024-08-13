import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {

    const [menu, loading] = useMenu();
    const popular = menu?.filter((item) => item?.category === 'popular');
    return (
        <div>
            <SectionTitle heading={'From Our Menu'} subHeading={'Popular Items'} />
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 my-5 mx-2'>
                {
                    popular?.map((item) => <MenuItem key={item?._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularMenu;