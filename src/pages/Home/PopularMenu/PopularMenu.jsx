import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('/public/menu.json')
            .then((res) => res.json())
            .then((data) => {
                const popular = data?.filter((pop) => pop?.category === 'popular');
                setMenu(popular);
            });
    }, [])
    return (
        <div>
            <SectionTitle heading={'From Our Menu'} subHeading={'Popular Items'} />
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 my-5 mx-2'>
                {
                    menu?.map((item) => <MenuItem key={item?._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularMenu;