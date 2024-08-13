
import { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';


const Order = () => {

    const [menu] = useMenu();
    const [tabIndex, setTabIndex] = useState(0);

    const drink = menu?.filter((item) => item?.category === 'drinks');
    const dessert = menu?.filter((item) => item?.category === 'dessert');
    const pizza = menu?.filter((item) => item?.category === 'pizza');
    const soup = menu?.filter((item) => item?.category === 'soup');
    const salad = menu?.filter((item) => item?.category === 'salad');

    return (
        <div>
            <Cover img={orderImg} title={'Order Food'} />
            {/* tabs */}
            <div className='my-10'>
                <Tabs defaultIndex={0} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drink</Tab>
                    </TabList>
                    {/* tab content */}
                    {/* <TabPanel>
                        <h2>hell</h2>
                    </TabPanel> */}
                    <TabPanel><OrderTab items={salad} /> </TabPanel>
                    <TabPanel><OrderTab items={dessert} /> </TabPanel>
                    <TabPanel><OrderTab items={pizza} /> </TabPanel>
                    <TabPanel><OrderTab items={soup} /> </TabPanel>
                    <TabPanel><OrderTab items={drink} /> </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;