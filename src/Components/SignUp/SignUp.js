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
		confirmErr: '',
	};
	const [formState, setFormState] = useState(blankForm);

	function validateUsername(e) {
		//finish this
	}

	function validatePassword(e) {}
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<div className='container sign-up center-h'>
			<form className='form-stack' onSubmit={handleSubmit}>
				<h1>Sign Up</h1>
				<label htmlFor='username'>Username:</label>
				<FormField
					type='text'
					id='username'
					form={formState}
					err={formState.usernameErr}
					required={true}
					handleChange={validateUsername}
				/>
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
