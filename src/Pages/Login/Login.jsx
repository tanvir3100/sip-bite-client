import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import HelmetSection from '../../Hooks/Helmet/HelmetSection';
import { Helmet } from 'react-helmet-async';

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

        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire("Log in Successful!", "You are now logged in as an admin.", "success");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Incorrect email or password. Please try again.',
                });
            });
    };

    return (
        <>
            <Helmet>
                <title>SipBite | Login</title>
            </Helmet>
            <div className="w-full min-h-screen flex justify-center items-center">
                <HelmetSection title={'Sip Bite | Log In'} />
                <div className=" w-[50%] h-[80%] shadow-2xl mb-10 mt-10" >
                    <div className="hero-content flex-col lg:flex-row p-0">
                        <div className="text-center lg:text-left">
                            {/* Additional content if needed */}
                        </div>
                        <div className="card shrink-0 w-full max-w-sm">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <h1 className="text-2xl font-bold text-center">Admin Log In Only!</h1>
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
                                </div>
                                <div className="form-control">
                                    <input className='btn bg-[#FF5700] text-[#FDF6D2]' type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
