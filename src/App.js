import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SellerSignIn from './pages/SellerSignIn';
import SellerSignUp from './pages/SellerSignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/sellersignin" element={<SellerSignIn />} />
        <Route path="/sellersignUp" element={<SellerSignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
