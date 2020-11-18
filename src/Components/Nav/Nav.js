//MODIFIED FROM REACT-BURGER-MENU DOCUMENTATION EXAMPLES
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Nav.css';

const Nav = (props) => {
	return (
		<Menu right>
			<a className='bm-item' href='/'>
				Home
			</a>
			<a className='bm-item' href='/lists'>
				Browse Lists
			</a>
			<a className='bm-item' href='/lists'>
				Create a List
			</a>
			<a className='bm-item' href='/lists'>
				My Profile
			</a>
			<a className='bm-item' href='/lists'>
				Log In/Log Out{' '}
				{/* placeholder, will be conditional when the time comes */}
			</a>
		</Menu>
	);
};

export default Nav;
