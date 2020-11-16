import React from 'react';

//DUMMY COMPONENT FOR STYLING, DO NOT USE
const SignUp = () => {
	return (
		<div className='container custom center-h'>
			<form className='form-stack' action='submit'>
				<h1>Sign Up</h1>
				<label htmlFor='username'>Username:</label>
				<input required type='text' id='username' />
				<label htmlFor='email'>Email:</label>
				<input required type='email' id='email' />
				<button>Submit</button>
				<button type='click'>Cancel</button>
			</form>
		</div>
	);
};

export default SignUp;
