import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            toast.success('Logged in successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            toast.success('Logged in successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error logging in with Google:', error);
        }
    };

    const handleGithubLogin = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            toast.success('Logged in successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error logging in with GitHub:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>Login - Career Inspire</title>
                <meta name="description" content="Log in to your Career Inspire account to access exclusive services and resources." />
            </Helmet>
            <div className="login-container">
                <ToastContainer />
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group relative">
                        <label htmlFor="password">Password:</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="absolute inset-y-0 right-0 pr-3 mt-5 flex items-center cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </span>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <button onClick={handleGoogleLogin} className="google-login-button">Login with Google</button>
                <button onClick={handleGithubLogin} className="github-login-button">Login with GitHub</button>
                <p>Forgot your password? <Link to={`/forgot-password?email=${email}`}>Reset here</Link></p>
                <p>Don't have an account? <Link to="/signup">Create one!</Link></p>
            </div>
        </HelmetProvider>
    );
};

export default Login;
