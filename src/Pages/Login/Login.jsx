import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import HelmetSection from '../../Hooks/Helmet/HelmetSection';


const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire("Log in Successful!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <HelmetSection title={'Sip Bite | Log In'} />
            <div className=" w-[80%] h-[80%] shadow-2xl mb-10 mt-10" >
                <div className="hero-content flex-col lg:flex-row p-0">
                    <div className="text-center lg:text-left">

                    </div>
                    <div className="card shrink-0 w-full max-w-sm">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <h1 className="text-2xl font-bold text-center">Login now!</h1>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <input className='btn bg-[#D1A054B3] text-white' type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-5'>Have no Account? <Link to='/register'><span className='hover:text-red-700 hover:underline'>Sign Up</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
