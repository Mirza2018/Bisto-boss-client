import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleUpdateAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is update to admin`,
                        showConfirmButton: false,
                        timer: 1200
                      })
                }
            })

    }

    return (
        <div className="w-full container">
            <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {
                users.length
            }</h3>

            <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role == 'admin' ? 'Admin' : <>
                                            <button onClick={() => handleUpdateAdmin(user)} className="btn btn-ghost bg-orange-300 text-white"><FaUserShield /></button>
                                        </>
                                    }


                                </td>

                                <td>

                                    <button onClick={() => handleUpdateAdmin(user._id)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt /></button>
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;