import './App.css';
import GameCard from './Components/GameCard/GameCard';

function App() {
	const dummyGame = {
		cover:
			'https://i.pinimg.com/originals/1b/d4/14/1bd4141717fc3bd8d3e517cadaa231ab.png',
		title: 'Spider-Man - Miles Morales',
		developer: 'Insomniac Games',
		id: 12345,
	};
	return (
		<div className='App center'>
			<GameCard game={dummyGame} />
		</div>
	);
}

export default App;
