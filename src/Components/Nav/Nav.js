//MODIFIED FROM REACT-BURGER-MENU DOCUMENTATION EXAMPLES
import React, { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Nav.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppContext.js';

const Nav = (props) => {
	const { userInfo, setUserInfo } = useContext(AppContext);
	function logOut() {
		setUserInfo();
	}
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
			<Link to='/user/:id' className='bm-item' href='/lists'>
				My Lists
			</Link>
			<Link to='/lists/edit/5fbad79c5e5fcd0017110fcf'>Edit</Link>
			{userInfo ? (
				<button onClick={logOut}>Log Out</button>
			) : (
				<Link to='/login' className='bm-item' href='/lists'>
					Log In
				</Link>
			)}
		</Menu>
	);
};

export default Nav;
