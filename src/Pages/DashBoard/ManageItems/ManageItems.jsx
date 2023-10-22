import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import ManageItem from './ManageItem';

const ManageItems = () => {
    const [menu] = useMenu()
    return (
        <div className='w-full '>
            <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle>


            <div className="overflow-x-auto m-24 rounded-xl bg-slate-50">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#D1A054] text-white'>
                            <th></th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                            <th>ACTION</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}{
                            menu.map((m,index)=> <ManageItem 
                                menu={m} 
                                key={m._id}
                                index={index}
                                />)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItems;