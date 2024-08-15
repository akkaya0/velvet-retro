import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isSellerSignedIn, setIsSellerSignedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsSellerSignedIn(true);
        } else {
            setIsSellerSignedIn(false);
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        setIsSellerSignedIn(false);
        navigate('/');
        window.location.reload();
    };

    return (
        <nav className='bg-gray-900 p-5 flex items-center justify-between'>
            <div className='text-gray-300 text-4xl italic px-2 border border-gray-500 ring-4 ring-gray-500'>
                <span>velvet retro</span>
            </div>
            <ul className='text-white text-sm flex items-center justify-center'>
                {isSellerSignedIn ? (
                    <>
                        <li>
                            <button className='px-3'><Link to="/postproduct">Sell a New Product</Link></button>
                        </li>
                        <li className='ml-10'>
                            <button className='px-3' onClick={handleSignOut}>Sign Out</button>
                        </li>
                    </>
                ) : (
                    <li>
                        <button className='px-3'><Link to="/signin">Sign In</Link></button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
