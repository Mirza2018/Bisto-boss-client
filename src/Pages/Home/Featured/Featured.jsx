import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import moment from "moment/moment";
import './Featured.css'
import { Link } from "react-router-dom";


const Featured = () => {
    return (
        <div className="feature-item bg-fixed text-white pt-4">
            <SectionTitle
                heading={'Check it out'}
                subHeading={'From our Menu'}
            ></SectionTitle>


            <div className="bg-opacity-40 bg-black md:flex justify-center items-center py-20 pt-12 px-36">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className="text-xl">{moment().format('MMMM Do, YYYY')}</p>
                    <h1 className="uppercase text-2xl">What is healthy eating?</h1>
                    <p>
                    Healthy eating is not about strict limitations, staying unrealistically thin, or depriving yourself of the foods you love. Rather, it’s about eating well-balanced meals that leave you feeling great, having more energy, improving your health, and boosting your mood.
                    </p>
                    <Link className='' to="/order/salad"> <button  className="btn btn-outline border-0 rounded-lg  bg-orange-400 text-white mt-3">Order Now</button></Link>

                </div>
            </div >
        </div >
    );
};

export default Featured;