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
                <div className='grid md:grid-cols-3 gap-10 '>
                    {
                        items.slice(0, 6).map(item => <FoodCart
                            key={item._id}
                            item={item}
                        ></FoodCart>)
                    }

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='grid md:grid-cols-3 gap-10 '>
                    {
                        items.slice(7, 12).map(item => <FoodCart
                            key={item._id}
                            item={item}
                        ></FoodCart>)
                    }
                </div>

            </SwiperSlide>


        </Swiper>


    );
};

export default OrderTab;