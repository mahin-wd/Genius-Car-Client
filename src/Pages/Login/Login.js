import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/Auth Provider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigation = useNavigate()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
        navigation('/')
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2">
                <div className="text-center lg:text-left">
                <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-10">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className="text-4xl font-bold text-center">Login</h2>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                    <label className="label">
                        <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-orange-600 border-none" type="submit" value="Login" />
                    </div>
                </form>
                <p className="m-auto">New to Genius Car? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;