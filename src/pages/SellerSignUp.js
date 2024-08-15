import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./styles.css"

const SellerSignUp = () => {
    const [shopName, setShopName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/sellersignup', {
                shop_name: shopName,
                email,
                password,
            });
            setSuccess('Seller registered successfully!');
            setShopName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        } catch (err) {
            setError('Error registering seller. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <div className='flex row justify-between items-center px-5'>
                <p className='max-w-xs text-center'>You have an account?<br /><Link to="/sellersignin" className='text-blue-500 hover:text-blue-700'>Click here</Link> to sign in!</p>
                <form onSubmit={handleSubmit} className='w-6/12'>
                    <div>
                        <label>Shop Name:</label>
                        <input
                            type="text"
                            value={shopName}
                            onChange={(e) => setShopName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input
                            type="password" minLength="8"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>

                </form>
                <p className='max-w-xs text-center'>Are you not a seller?<br /><Link to="/sellersignin" className='text-blue-500 hover:text-blue-700'>Click here</Link> to sign in as a user!</p>
            </div>
        </div>
    );
};

export default SellerSignUp;
