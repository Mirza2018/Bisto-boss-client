import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {
    const [disible, setDisibale] = useState(true)
    const { handleLogin, user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'


    console.log(user);
    useEffect(() => {
        loadCaptchaEnginge(7)
    }, [])
    const useCaptcha = useRef()


    const handleCaptcha = () => {
        const captcha = useCaptcha.current.value
        console.log(captcha);

        if (validateCaptcha(captcha)) {
            console.log('done');
            setDisibale(false)
        }
        else {
            setDisibale(true)
            Swal.fire(
                'Worng Captcha!',
                'Worng',
                'error'
            )
            console.log("nope");

        }
    }

    const handleForm = (e) => {

        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        handleLogin(email, password)
            .then(res => {
                console.log(res.user);

                Swal.fire(
                    'Login successfully done!',
                    'You Logged in!',
                    'success'
                )
                e.target.value = "";
                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                New user?<Link to='/signup'> <a href="#" className="label-text-alt link link-hover">Sign Up</a></Link>

                            </label>

                        </div>

                        <div className="form-control">
                            <label className="label">

                                <LoadCanvasTemplate />


                            </label>
                            <input ref={useCaptcha} type="text" name="captcha" placeholder="type text captcha abobe" className="input input-bordered" required />
                            <button onClick={handleCaptcha} className='btn btn-outline'>Sign In</button>

                        </div>


                        {/* <div className="form-control mt-6">
                            <button disabled={disible} className="btn btn-primary">Submit</button>
                        </div> */}

                        {/* <LoadCanvasTemplate />
                        componentDidMount () {
                            loadCaptchaEnginge(6)
                        } */}
                        <SocialLogin></SocialLogin>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;