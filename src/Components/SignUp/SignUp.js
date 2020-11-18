import React, { useState } from 'react';
import './SignUp.css';
import FormField from '../FormField/FormField';
//DUMMY COMPONENT FOR STYLING, DO NOT USE, FORM FIELDS WILL BE CONVERTED TO CUSTOM COMPONENTS
const SignUp = () => {
	const blankForm = {
		username: '',
		email: '',
		password: '',
		confirm: '',
		usernameErr: '',
		emailErr: '',
		confirmErr: '',
	};
	const [formState, setFormState] = useState(blankForm);

	function validateUsername(e) {
		const regex = RegExp('^[a-zA-Z_]*$');
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

	function validatePassword(e) {}
	function handleSubmit(e) {
		e.preventDefault();
		if (
			!formState.usernameErr &&
			!formState.emailErr &&
			!formState.confirmErr
		) {
			console.log(formState);
		} else {
			console.log('invalid form');
		}
	}

	return (
		<div className='container sign-up-box center-h'>
			<form className='form-stack sign-up-form' onSubmit={handleSubmit}>
				<h1>Sign Up</h1>
				<label htmlFor='username'>Username:</label>
				<FormField
					type='text'
					id='username'
					value={formState.username}
					err={formState.usernameErr}
					handleChange={validateUsername}
				/>
				<label htmlFor='email'>Email:</label>
				<input type='email' id='email' />
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
