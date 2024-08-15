import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./styles.css"

const SignUp = () => {
    return (
        <div>
            <Navbar />
            <p>You have an account? <Link to="/signup">Click here</Link> to sign in!</p>
            <p>Are you a seller instead? <Link to="/sellersignin">Click here</Link> to sign in or sign up as a seller and start selling your products!</p>
        </div>
    )
}

export default SignUp