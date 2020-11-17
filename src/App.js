import './App.css';
import GameCard from './Components/GameCard/GameCard';
import ListCard from './Components/ListCard/ListCard'

function App() {
	const collection = {
		image: 'https://images.theconversation.com/files/175539/original/file-20170626-315-1h7k01d.jpg?ixlib=rb-1.1.0&rect=0%2C618%2C3500%2C1697&q=45&auto=format&w=1356&h=668&fit=crop',
		listName: 'My List',
		author: 'Author',
	};
	return (
		<div className='App center'>
			<ListCard collection={collection} />
		</div>
	);
}

export default App;
