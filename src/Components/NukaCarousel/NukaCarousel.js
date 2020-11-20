import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
    render () {
        return (
					<Carousel withoutControls={true} autoplay={true} autoplayInterval={5000}>
						<img src='https://www.gamemusictown.com/wp-content/uploads/2018/11/Videogames-The-Movie-Poster-Topo.jpg' />
						<img src='https://www.gamemusictown.com/wp-content/uploads/2018/11/Videogames-The-Movie-Poster-Topo.jpg' />
						<img src='https://www.gamemusictown.com/wp-content/uploads/2018/11/Videogames-The-Movie-Poster-Topo.jpg' />
						<img src='https://www.gamemusictown.com/wp-content/uploads/2018/11/Videogames-The-Movie-Poster-Topo.jpg' />
						<img src='https://www.gamemusictown.com/wp-content/uploads/2018/11/Videogames-The-Movie-Poster-Topo.jpg' />
					</Carousel>
				);
    }
}