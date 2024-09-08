import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title }) => {
    return (
        <div className=''>
            {title && <Cover img={img} title={title?title:'Our Menu'}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-10 my-20 p-4 content-center">
                {
                    items?.map(item => <MenuItem
                        item={item}
                        key={item.idMeal}
                    ></MenuItem>)
                }
            </div>
            
            <Link className='' to={`/order/${title}`}><div className='text-center'><button className="btn btn-outline border-0 rounded-lg  bg-orange-400 text-white mb-4">Order Now</button></div></Link>
            
        </div>
    );
};

export default MenuCategory;