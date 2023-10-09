import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";



const MyCart = () => {
    const { cart,refetch } = useCart()

    const abc = cart.reduce((a, b) => a + parseFloat(b.price), 0)
    console.log(abc);
    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })
            }
        })
    }
    return (
        <div className="h-full mt-36">
            <Helmet>
                <title>BistroBoss | My cart</title>
            </Helmet>


            <div className="uppercase font-semibold h-10 flex justify-evenly items-center">
                <h3 className="text-xl">Total Item :{cart.length}</h3>
                <h3 className="text-xl">Total Price :${abc}</h3>
                <button className="btn btn-warning btn-sm">pay</button>
            </div>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row, index) => <tr key={row._id} >
                                <td>
                                    <label>
                                        {index + 1}
                                    </label>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {row.name}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td className="text-end">${row.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(row._id)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }




                    </tbody>
                    {/* foot */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default MyCart;