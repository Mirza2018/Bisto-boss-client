import { useState } from 'react';
import img from '../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabindex] = useState(initialIndex)
    // const [menu] = useMenu()

    //console.log(category);
    //console.log(initialIndex,'initialIndex');


    const salad = useMenu("Dessert")[0].meals

    return (
        <div className='bg-white'>
            <Helmet>
                <title>Dhakaiya food | Order food</title>
            </Helmet>
            <Cover img={img} title="Order menu"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad.slice(0,13)}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad.slice(13,26)}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad.slice(27,41)}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad.slice(42,55)}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad.slice(56,72)}></OrderTab>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default Order;