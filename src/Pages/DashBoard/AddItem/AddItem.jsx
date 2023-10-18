import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AddItem = () => {
    return (
        <div className="w-full">
            <SectionTitle subHeading="What's new" heading="Add An Item"></SectionTitle>

            <form >
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Racipie Name*</span>

                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Category*</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Dessert</option>
                        <option>Drinks</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>

                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <input className="btn btn-sm mt-4 bg-black text-white" type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default AddItem;