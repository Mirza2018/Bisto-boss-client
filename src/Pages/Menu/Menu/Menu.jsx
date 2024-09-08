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

    
    const dessert = useMenu("Dessert")[0].meals

    return (

        <div>
            <Helmet>
                <title>Dhakaiya food | Menu</title>
            </Helmet>
            <Cover img={img} title='Our Menu'></Cover>
            <SectionTitle
                heading="Don't miss"
                subHeading="today's offer"
            ></SectionTitle>

{
   dessert && 
   <>

<MenuCategory items={dessert.slice(11,21)} img={img1} title='dessert'></MenuCategory>
<MenuCategory items={dessert.slice(22,32)} img={img2} title='pizza'></MenuCategory>
<MenuCategory items={dessert.slice(33,43)} img={img3} title='salad'></MenuCategory>
<MenuCategory items={dessert.slice(44,54)} img={img4} title='soup'></MenuCategory>
</>

}






        </div>
    );
};

export default Menu;