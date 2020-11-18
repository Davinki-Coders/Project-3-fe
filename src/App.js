import './App.css';
import GameCard from './Components/GameCard/GameCard';
import Nav from './Components/Nav/Nav';
import { Route, Link } from 'react-router-dom';

function App() {
	const testData = require('../public/test-data.json');
	//PLEASE DO NOTE MOVE THE HTML BELOW, IT WILL BREAK THE BURGER MENU
	return (
		<div className='App' id='outer-container'>
			<Nav pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
			<div id='page-wrap'>
				<Link to='/' className='header-link'>
					<h1 className='logo-header'>App Name</h1>
				</Link>
				<div className='main'>
					{/*insert youre in-progress component right above this comment if
          you'd like to test it on the home page, again please try not to move these
          components that are tied to the burger menu*/}
					<Route path='/' />
					<Route path='/lists' />
					<Route path='/lists/create' />
					<Route path='/user' />
					<Route path='/login' />
				</div>
			</div>
		</div>
	);
}

export default App;
