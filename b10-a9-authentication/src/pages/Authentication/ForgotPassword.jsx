import React, { useState, useEffect } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/ForgotPassword.css'; 

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const emailParam = params.get('email');
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [location]);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent! Please check your inbox.');
            window.location.href = 'https://mail.google.com';
        } catch (error) {
            console.error('Error sending password reset email:', error);
            alert('Failed to send password reset email. Please try again.');
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Reset Password</h2>
            <form onSubmit={handleResetPassword}>
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
                <button type="submit" className="reset-button">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
