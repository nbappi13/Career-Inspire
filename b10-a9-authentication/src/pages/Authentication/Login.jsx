import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import '../../styles/Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            navigate('/');
        } catch (error) {
            console.error('Error logging in with Google:', error);
        }
    };

    const handleGithubLogin = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            navigate('/');
        } catch (error) {
            console.error('Error logging in with GitHub:', error);
        }
    };

    return (
        <div className="login-container">
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
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <button onClick={handleGoogleLogin} className="google-login-button">Login with Google</button>
            <button onClick={handleGithubLogin} className="github-login-button">Login with GitHub</button>
            <p>Don't have an account? <Link to="/signup">Create one!</Link></p>
        </div>
    );
};

export default Login;
