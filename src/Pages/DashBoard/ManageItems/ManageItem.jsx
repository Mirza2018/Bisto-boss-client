import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";


const ManageItem = ({ menu, index }) => {
    const { name, image, price, recipe } = menu
    const [, , refetch] = useMenu()

    const [axiosSecure] = useAxiosSecure()

    const handleDelete = item => {
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

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {name}

            </td>
            <td className="text-right">${price}</td>
            <th>
                <button className="btn btn-ghost text-lg bg-yellow-600 text-white"><FaEdit /> </button>
            </th>
            <th>
                <button onClick={() => handleDelete(menu)} className="btn btn-ghost text-lg bg-red-700 text-white"><FaRegTrashAlt /></button>
            </th>


        </tr>
    );
};

export default ManageItem;