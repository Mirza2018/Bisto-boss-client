import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopulerMenu = () => {
    // const [menu] = useMenu()
   
    const popular = useMenu("Dessert")[0].meals


    
    return (
        <div className="mb-12">
            <SectionTitle
                subHeading={'Chech it Out'}
                heading={'From our menu'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular?.slice(10,30).map(item => <MenuItem
                        item={item}
                        key={item.idMeal}
                    ></MenuItem>)
                }
            </div>
            <div className="mx-auto text-center my-5">
            <Link className='' to="/order/salad"> <button  className="btn btn-outline border-0 rounded-lg  bg-orange-400 text-white">Order Now</button></Link>
               </div>
        </div>
    );
};
 
export default PopulerMenu;