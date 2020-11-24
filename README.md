## Description
 
Curatr reigns supreme as the best list creating application for game tracking. It's a one stop destination for creating lists related to published video games.
 
## Screenshots
 
![1](https://i.imgur.com/Gnpk081.png)
 
![2](https://i.imgur.com/wOaKbXG.png)
 
## Technologies Used
 
- Rawg API
- React
- React Router
- Heroku
- Axios

 
### Installation Instructions
 
- Fork and clone front end repository on our organization page at [github.com](https://github.com/Davinki-Coders)
- Visit [Rawg](https://rawg.io/apidocs) and create an API key.
- In the front end repository create a .env.local folder.
- In the .env.local folder paste 
```
REACT_APP_<VARIABLE_NAME>=<PASTE_API_KEY>
```
into the folder.

- In the terminal run 
```
npm i
```
to install dependencies. 
- run 
``` 
npm start
```
 to launch App.js in the browser
 

## Wire Frames
 
![1](https://media.git.generalassemb.ly/user/31365/files/e3fca700-2768-11eb-98ee-32ab0e98a25a)\
![2](https://media.git.generalassemb.ly/user/31365/files/e4953d80-2768-11eb-8293-bf7ddd1991ce)\
![3](https://media.git.generalassemb.ly/user/31365/files/e4953d80-2768-11eb-874b-60695f97f433)
 
## Team Comments
 
### Rodrigo Pereira
 
- A challenge I have experienced is Auto closing the navigation bar on a link click. Since it’s an npm package using state to manipulate it isn’t working as intended.

- The code below represents my favorite lines of code. They are lines that I have created for error handeling.

```
<input
	className={!err ? '' : false || 'err'}
	required={required}
	type={type}
	id={id}
	value={value}
	onChange={handleChange}
/>
{!err || <p className='err-text'>*{err}</p>}
```
```
function validateUsername(e) {
		const regex = RegExp('^[a-zA-Z0-9_]*$');
		if (!e.target.value) {
			setFormState({
				...formState,
				usernameErr: 'Required',
				[e.target.id]: e.target.value,
			});
		} else if (regex.test(e.target.value) && e.target.value) {
			setFormState({
				...formState,
				usernameErr: '',
				[e.target.id]: e.target.value,
			});
		} else {
			setFormState({
				...formState,
				usernameErr: 'No special chars except underscore',
				[e.target.id]: e.target.value,
			});
		}
	}
 
 ```

### Rashawn Gordon
 
- In my other project I wished I utilized more of the react-features / packages we installed for this project. One of my goals was to figure out the react-carousel feature. When I first attempted to do the carousel for this project I installed one that was extremely limited for sizing and scaling purposes. Rodrigo introduced another react-carousel to me and we decided to go with the nuka-carousel installment which was fun — thus I overcame a hurdle and added a beautiful feature to the project.

- My favorite lines of code belong to the carosel I described above.
```
<Carousel withoutControls={true} autoplay={true} autoplayInterval={5000}>
			<img
				className='hero-image'
				src='https://media.rawg.io/media/resize/1920/-/screenshots/092/092c8c633cff8e366b7b7e456337303e_mOIc8Dp.jpg'
				alt='Demon Souls'
			/>
			{screenshots.map((screenshot, index) => (
				<img
					src={screenshot}
					className='hero-image'
					key={index}
					alt={'App Carousel'}
				/>
			))}
		</Carousel>
```		
 
### Neely Neverson
 
- A hurdle for me was bug finding. It seemed like everytime I resolved a bug another one popped up. It was very frustrating and at times I found it hard to remain patient. It was helpful to step away from my machine and take a breather. Doing so helped me to clear my mind after which I was able to reframe the issue and tackle it from another perspective.

- The lines below are my favorite lines of code becuase they do more that the CRUD function that was taught in classe. I had the oppertunity to create more specific routes for my group project and it was so functional that it didn't need to be edited for errors after the backend was deployed.

```router.get('/author/:id', (req, res, next) => {
	List.find({ owner: req.params.id })
		.then((list) => {
			if (!list) {
				res.sendStatus(404);
			} else {
				res.json(list);
			}
		})
		.catch(next);
});
```

 
### Jake Addis
 
- A few hurdles I faced were ,s taying within the bounds of a shared idea, feeling "ownership" over a particular part of an app that was a great overall team project and trying not getting lost in "stretch" features. The block of code below are my favorite lines of code becuase it is very dry.


```
useEffect(() => {
		axios.get("https://davinkibackend.herokuapp.com/api/lists").then((res) => {
			setRecentLists(
				res.data.slice(Math.max(res.data.length - 4, 0)).reverse()
			);
		});
	}, []);

```

## Contribution Guidelines

Front end source code : https://github.com/Davinki-Coders/Project-3-fe

Front end issue Tracker : https://github.com/Davinki-Coders/Project-3-fe/issues

Back end source code : https://github.com/Davinki-Coders/Project-3-be

Back end issue tracker : https://github.com/Davinki-Coders/Project-3-be/issues