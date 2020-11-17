import React from 'react';

//DUMMY COMPONENT FOR STYLING, DO NOT USE, FORM FIELDS WILL BE CONVERTED TO CUSTOM COMPONENTS
const SignUp = () => {
	return (
		<div className='container custom center-h'>
			<form className='form-stack' action='submit'>
				<h1>Sign Up</h1>
				<label htmlFor='username'>Username:</label>
				<input className='err' required type='text' id='username' />
				<p className='err-text'>*invalid username</p>
				<label htmlFor='email'>Email:</label>
				<input required type='email' id='email' />
				<button>Submit</button>
				<button className='err' type='click'>
					Cancel
				</button>
				<p style={{ display: 'block', margin: '3px' }}>
					Have an account?&nbsp;
					<a href='#'>Log In</a>
				</p>
			</form>
		</div>
	);
};

export default SignUp;
