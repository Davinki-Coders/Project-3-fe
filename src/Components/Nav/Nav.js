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
		localStorage.removeItem('curatr_user');
		localStorage.removeItem('curatr_id');
		localStorage.removeItem('token');
	}
	return (
		<Menu right>
			<Link to='/' className='bm-item'>
				Home
			</Link>
			<Link to='/lists' className='bm-item'>
				Browse Lists
			</Link>
			<Link to='/create' className='bm-item'>
				Create List
			</Link>
			{userInfo ? (
				<Link to={'/user/' + userInfo._id} className='bm-itm'>
					My Lists
				</Link>
			) : null}
			{userInfo ? (
				<button onClick={logOut}>Log Out</button>
			) : (
				<Link to='/login' className='bm-item'>
					Log In
				</Link>
			)}
		</Menu>
	);
};

export default Nav;
