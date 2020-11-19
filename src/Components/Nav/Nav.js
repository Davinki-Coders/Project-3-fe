//MODIFIED FROM REACT-BURGER-MENU DOCUMENTATION EXAMPLES
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
	return (
		<Menu right>
			<Link to='/' className='bm-item' href='/'>
				Home
			</Link>
			<Link to='/lists' className='bm-item' href='/lists'>
				Browse Lists
			</Link>
			<Link to='/create' className='bm-item' href='/lists'>
				Create List
			</Link>
			<Link to='/user' className='bm-item' href='/lists'>
				My Profile
			</Link>
			<Link to='/login' className='bm-item' href='/lists'>
				Log In/Log Out{' '}
				{/* placeholder, will be conditional when the time comes */}
			</Link>
		</Menu>
	);
};

export default Nav;
