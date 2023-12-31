import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopulerMenu = () => {
    const [menu] = useMenu()
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const remaning = data.filter(d => d.category === 'popular')
    //             setMenu(remaning)
    //         })
    // }, [])

    const popular = menu.filter(item => item.category === 'popular')


    
    return (
        <div className="mb-12">
            <SectionTitle
                subHeading={'Chech it Out'}
                heading={'From our menu'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)
                }
            </div>
            <div className="mx-auto text-center my-5">
                <button className="px-14  btn btn-outline border-0  rounded-lg border-b-4  ">Order Now</button></div>
        </div>
    );
};

export default PopulerMenu;