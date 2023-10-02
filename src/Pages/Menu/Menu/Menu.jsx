import { Helmet } from "react-helmet-async";
import img from "../../../assets/menu/banner3.jpg"
import img1 from "../../../assets/menu/dessert-bg.jpeg"
import img2 from "../../../assets/menu/pizza-bg.jpg"
import img3 from "../../../assets/menu/salad-bg.jpg"
import img4 from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import Cover from "../../Shared/Cover/Cover";

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (

        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={img} title='Our Menu'></Cover>
            <SectionTitle
                heading="Don't miss"
                subHeading="today's offer"
            ></SectionTitle>
            <MenuCategory items={offered} img={img}></MenuCategory>
            <MenuCategory items={dessert} img={img1} title='Dessert menu'></MenuCategory>
            <MenuCategory items={pizza} img={img2} title='Pizza menu'></MenuCategory>
            <MenuCategory items={salad} img={img3} title='Salad menu'></MenuCategory>
            <MenuCategory items={soup} img={img4} title='Soup menu'></MenuCategory>
        </div>
    );
};

export default Menu;