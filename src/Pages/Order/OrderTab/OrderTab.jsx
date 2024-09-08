import FoodCart from '../../../components/FoodCart/FoodCart';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (


        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10  my-4  items-center p-4'>
                    {
                        items?.slice(0, 6).map(item => <FoodCart
                            key={item.idMeal}
                            item={item}
                        ></FoodCart>)
                    }

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10  my-4  items-center p-4'>
                    {
                        items?.slice(7, 13).map(item => <FoodCart
                            key={item.idMeal}
                            item={item}
                        ></FoodCart>)
                    }
                </div>

            </SwiperSlide>


        </Swiper>


    );
};

export default OrderTab;