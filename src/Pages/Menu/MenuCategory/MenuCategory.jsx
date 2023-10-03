import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title }) => {
    return (
        <div>
            {title && <Cover img={img} title={title?title:'Our Menu'}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-10 my-20">
                {
                    items.map(item => <MenuItem
                        item={item}
                        key={item._id}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 rounded-lg border-b-4 ">Order Now</button></Link>
            
        </div>
    );
};

export default MenuCategory;