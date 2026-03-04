import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import UserDetail from './pages/UserDetail';

const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/user/:id' element={<UserDetail />} />
                </Routes>
            </Router>
        </>
    )
}

export default App