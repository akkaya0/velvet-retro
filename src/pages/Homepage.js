import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Products />
            </main>
        </div>
    );
};

export default Homepage;
