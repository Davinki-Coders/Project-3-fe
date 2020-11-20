import React, { useState, useContext } from 'react';
import './SignUp.css';
import FormField from '../FormField/FormField';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { AppContext } from '../../AppContext';

//DUMMY COMPONENT FOR STYLING, DO NOT USE, FORM FIELDS WILL BE CONVERTED TO CUSTOM COMPONENTS
const SignUp = () => {
	const history = useHistory();
	const { userInfo, setUserInfo } = useContext(AppContext);
	if (userInfo) {
		history.push('/');
	}
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
	const [sent, setSent] = useState(false);

	function doubleCheckForm() {
		const errs = {};
		errs.usernameErr = formState.username ? '' : 'Required';
		errs.emailErr = formState.email ? '' : 'Required';
		errs.passwordErr = formState.password ? '' : 'Required';
		errs.confirmErr = formState.confirm ? '' : 'Required';
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

	function handleCancel(e) {
		history.push('/');
	}

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
					confirmErr: '',
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
				confirmErr: '',
				[e.target.id]: e.target.value,
			});
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		setSent(true);
		if (doubleCheckForm()) {
			const url = 'https://davinkibackend.herokuapp.com/api/users/signup';
			Axios({
				method: 'post',
				url: url,
				data: {
					username: formState.username,
					email: formState.email,
					password: formState.password,
				},
			})
				.then((res) => {
					Axios({
						method: 'post',
						url: 'https://davinkibackend.herokuapp.com/api/users/login',
						data: {
							email: formState.email,
							password: formState.password,
						},
					}).then((res) => {
						setUserInfo({
							username: res.data.username,
							_id: res.data._id,
							email: res.data.email,
						});
						localStorage.setItem('token', res.data.token);
					});
				})
				.then(() => history.push('/'))
				.catch(console.error);
		} else {
			setSent(false);
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
				<label htmlFor='confirm'>Confirm Password:</label>
				<FormField
					type='password'
					id='confirm'
					value={formState.confirm}
					err={formState.confirmErr}
					handleChange={validatePassword}
				/>
				<button type='submit' disabled={sent}>
					Submit
				</button>
				<button className='err' type='click' onClick={handleCancel}>
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
