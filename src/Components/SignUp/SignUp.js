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
		passwordErr: '',
		confirmErr: '',
	};
	const [formState, setFormState] = useState(blankForm);

	function doubleCheckForm() {
		const errs = {};
		errs.usernameErr = formState.username ? '' : 'Required';
		errs.emailErr = formState.emailErr ? '' : 'Required';
		errs.passwordErr = formState.passwordErr ? '' : 'Required';
		errs.confirmErr = formState.confirmErr ? '' : 'Required';
		setFormState({ ...formState, ...errs });
		if (
			!errs.usernameErr &&
			!errs.emailErr &&
			!errs.confirmErr &&
			!errs.passwordErr
		) {
			return true;
		} else {
			return false;
		}
	}

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

	function validateEmail(e) {
		const regex = RegExp('[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,15}$');
		if (!e.target.value) {
			setFormState({
				...formState,
				emailErr: 'Required',
				[e.target.id]: e.target.value,
			});
		} else if (regex.test(e.target.value) && e.target.value) {
			setFormState({
				...formState,
				emailErr: '',
				[e.target.id]: e.target.value,
			});
		} else {
			setFormState({
				...formState,
				emailErr: 'Invalid email',
				[e.target.id]: e.target.value,
			});
		}
	}

	function validatePassword(e) {
		if (!e.target.value) {
			setFormState({
				...formState,
				[e.target.id + 'Err']: 'Required',
				[e.target.id]: e.target.value,
			});
		} else if (e.target.id === 'password') {
			if (e.target.value !== formState.confirm) {
				setFormState({
					...formState,
					confirmErr: 'Passwords must match',
					passwordErr: '',
					[e.target.id]: e.target.value,
				});
			} else {
				setFormState({
					...formState,
					[e.target.id]: e.target.value,
				});
			}
		} else if (e.target.value !== formState.password) {
			setFormState({
				...formState,
				confirmErr: 'Passwords must match',
				[e.target.id]: e.target.value,
			});
		} else {
			setFormState({
				...formState,
				[e.target.id]: e.target.value,
			});
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (doubleCheckForm()) {
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
				<FormField
					type='email'
					id='email'
					value={formState.email}
					err={formState.emailErr}
					handleChange={validateEmail}
				/>
				<label htmlFor='password'>Password:</label>
				<FormField
					type='password'
					id='password'
					value={formState.password}
					err={formState.passwordErr}
					handleChange={validatePassword}
				/>
				<label htmlFor='password'>Confirm Password:</label>
				<FormField
					type='password'
					id='confirm'
					value={formState.confirm}
					err={formState.confirmErr}
					handleChange={validatePassword}
				/>
				<button>Submit</button>
				<button className='err' type='click'>
					Cancel
				</button>
				<p style={{ display: 'block', margin: '3px' }}>
					Have an account?&nbsp;
					<a href='/login'>Log In</a>
				</p>
			</form>
		</div>
	);
};

export default SignUp;
