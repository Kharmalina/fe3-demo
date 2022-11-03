import React from 'react';
import { Link } from 'react-router-dom';

// the useNavigate hook (from react router) is a way to dynamically do the exact same think a Link does
function Navigation() {

    return (
        <nav className='navbar d-flex justify-content-start'>
            <Link to="/">
                <div className='p-3'>
                    Home
                </div>
            </Link>
            <Link to="/about">
                <div className='p-3'>
                    About
                </div>
            </Link>
        </nav>
    )
}

export { Navigation }