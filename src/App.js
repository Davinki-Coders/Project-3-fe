import './App.css';
import GameCard from './Components/GameCard/GameCard';
import Nav from './Components/Nav/Nav';
import { Route } from 'react-router-dom';

function App() {
	const dummyGame = {
		cover:
			'https://i.pinimg.com/originals/1b/d4/14/1bd4141717fc3bd8d3e517cadaa231ab.png',
		title: 'Spider-Man - Miles Morales',
		developer: 'Insomniac Games',
		id: 12345,
	};
	//PLEASE DO NOTE MOVE THESE IT WILL BREAK THE BURGER MENU
	return (
		<div className='App' id='outer-container'>
			<Nav pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
			<div id='page-wrap'>
				<h1 className='logo-header'>App Name</h1>
				<div className='main'>
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
