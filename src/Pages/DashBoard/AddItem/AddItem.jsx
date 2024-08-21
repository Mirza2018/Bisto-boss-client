import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
// const image_token = import.meta.env.VITE_Image_Token;
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Token}`
    
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        const formData = new FormData()
        formData.append("image", data.image[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgeResponse => {
                if (imgeResponse.success) {
                    const imageUrl = imgeResponse.data.display_url;
                    const { name, category, price, recipe } = data;
                    const menuItem = { name, category, price: parseFloat(price), recipe, image: imageUrl }
                    // console.log(menuItem);
                    axiosSecure.post('/menu', menuItem)
                        .then(data => {
                            // console.log(data.data);
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'You Added new menu item',
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                            }
                        })
                }
            })
    }


    //console.log(image_hosting_url);
    return (
        <div className="w-full">
            <SectionTitle subHeading="What's new" heading="Add An Item"></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Racipie Name*</span>

                    </label>
                    <input type="text" placeholder="Recipe Name" className="input input-bordered w-full " {...register("name", { required: true, maxLength: 120 })} />
                </div>
                <div className="flex gap-3">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled >Pick One</option>
                            <option>pizza</option>
                            <option>soup</option>
                            <option>salad</option>
                            <option>dessert</option>
                            <option>drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>

                        </label>
                        <input  {...register("price", { required: true })} type="number" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea  {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full " />

                </div>
                <input className="btn btn-sm mt-4 bg-black text-white" type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default AddItem;