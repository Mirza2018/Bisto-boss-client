import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const SocialLogin = () => {
    const { handleGoogle, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handlelogin = () => {
        handleGoogle()
            .then(res => {
                const logedInUser = res.user;
                //console.log(logedInUser);
                const saveData = { name: logedInUser.displayName, email: logedInUser.email }


                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveData)
                })
                    .then(res => res.json())
                    .then(() => {


                        Swal.fire(
                            'Successfully Sign Up!',
                            'You clicked the button!',
                            'success'
                        )

                        navigate(from, { replace: true })

                    })




            })

    }
    return (
        <div className="text-center">
            <div className="divider"></div>
            <button onClick={handlelogin} className="btn btn-circle btn-outline ">
                <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;