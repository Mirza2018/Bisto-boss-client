import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const [disible, setDisibal] = useState(true)
    const captchaRef = useRef(null)
    useEffect(() => {
        loadCaptchaEnginge(7)
    }, [])

    const handleCaptcha = () => {
        const captcha = captchaRef.current.value;

        console.log(captcha);

        if (validateCaptcha(captcha)) {
            console.log('done');
            captchaRef.current.value = "";
           
            setDisibal(false)
        }
        else {
            console.log("nope");
            captchaRef.current.value = "";
        }
    }

    const handleForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">

                                <LoadCanvasTemplate />


                            </label>
                            <input type="input" name="captcha" placeholder="type text captcha abobe" ref={captchaRef} className="input input-bordered" required />
                            <button onClick={handleCaptcha} className='btn btn-outline mt-2'>Validate</button>
                        </div>


                        <div className="form-control mt-6">
                            <button disabled={disible} className="btn btn-primary">Submit</button>
                        </div>

                        {/* <LoadCanvasTemplate />
                        componentDidMount () {
                            loadCaptchaEnginge(6)
                        } */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;