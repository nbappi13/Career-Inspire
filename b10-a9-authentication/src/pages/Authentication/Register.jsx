import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Register.css'; 

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: name,
                photoURL: photoURL
            });
            toast.success('Logged in successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error registering:', error);
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
                <title>Sign Up - Career Inspire</title>
                <meta name="description" content="Sign up to create your Career Inspire account and access exclusive services and resources." />
            </Helmet>
            <div className="register-container">
                <ToastContainer />
                <h2>Sign Up</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="photoURL">Photo URL:</label>
                        <input
                            type="text"
                            id="photoURL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
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
                            pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                            title="Must contain at least one uppercase and lowercase letter, and at least 6 characters long"
                        />
                        <span
                            className="absolute inset-y-0 right-0 pr-3 mt-5 flex items-center cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </span>
                    </div>
                    <button type="submit" className="register-button">Sign up</button>
                </form>
                <button onClick={handleGoogleLogin} className="google-register-button">Sign up with Google</button>
                <button onClick={handleGithubLogin} className="github-register-button">Sign up with GitHub</button>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </HelmetProvider>
    );
};

export default Register;
