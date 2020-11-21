import './App.css';
import GameCard from './Components/GameCard/GameCard';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import { Route, Link } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import GameInfo from './Components/GameInfo/GameInfo';
import List from './Components/List/List';
import LogIn from './Components/LogIn/LogIn';
import React, { useState } from 'react';
import { AppContext } from './AppContext';

function App() {
	//PLEASE DO NOTE MOVE THE HTML BELOW, IT WILL BREAK THE BURGER MENU
	const [userInfo, setUserInfo] = useState();
	return (
		<div className='App' id='outer-container'>
			<AppContext.Provider value={{ userInfo, setUserInfo }}>
				<Nav pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
				<div id='page-wrap'>
					<div className='logo-header'>
						<Link to='/' className='header-link'>
							<h1>App Name</h1>
						</Link>
					</div>
					<div className='main'>
						{/*insert youre in-progress component right above this comment if
          you'd like to test it on the home page, again please try not to move these
          components that are tied to the burger menu*/}
						<Route path='/' exact component={Home} />
						<Route path='/lists' />
						<Route path='/lists/create' />
						<Route path='/user' />
						<Route path='/login' component={LogIn} />
						<Route path='/signup' component={SignUp} />
						<Route path='/games' component={GameInfo} />
						<Route
							exact
							path='/lists/:id'
							render={(props) => <List id={props.match.params.id} />}
						/>
					</div>
				</div>
			</AppContext.Provider>
		</div>
	);
}

export default App;
