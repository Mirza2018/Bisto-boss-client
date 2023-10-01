import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import moment from "moment/moment";
import './Featured.css'


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
                    <h1 className="uppercase text-2xl">Where can i get Some?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae consequatur deserunt suscipit, ratione nesciunt! Sapiente repudiandae quasi nesciunt ducimus odio unde. Nulla totam deleniti repellendus maiores recusandae reiciendis minus excepturi molestias unde porro saepe accusantium, quidem ullam vel dolorum quos officia voluptatibus eum quo facilis, possimus hic. Numquam, ipsa.
                    </p>
                    <button className="btn btn-outline border-0 text-white rounded-lg border-b-4  border-white">Order Now</button>

                </div>
            </div >
        </div >
    );
};

export default Featured;