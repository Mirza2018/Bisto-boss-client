import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";


const SignUp = () => {
    const { handleSignIn } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        handleSignIn(data.email, data.password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(error=>{
            console.log(error);
        })


    }



    // const handleForm = (e) => {
    //     e.preventDefault()
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email, password);
    //     handleSignIn(email, password)
    //         .then(res => {
    //             console.log(res.user);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }



    return (
        <>
            <Helmet>
                <title>Bistro Boss| SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password is must be bigger then 6 charecter </span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password is must be smaller then 20 charecter </span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase one lowercase one spacial cheracter </span>}

                                <label className="label">
                                    Alreday Have Account?<Link to='/login'> <a href="#" className="label-text-alt link link-hover">Login!!!</a></Link>
                                </label>
                            </div>



                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default SignUp;