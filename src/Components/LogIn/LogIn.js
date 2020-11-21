import React, { useState, useContext } from 'react';
import '../SignUp/SignUp.css';
import FormField from '../FormField/FormField';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import Axios from 'axios';

const LogIn = () => {
	const { userInfo, setUserInfo } = useContext(AppContext);
	const [sent, setSent] = useState(false);
	const history = useHistory();
	if (userInfo) {
		history.push('/');
	}
	const blankForm = {
		email: '',
		password: '',
		emailErr: '',
		passwordErr: '',
	};
	const [formState, setFormState] = useState(blankForm);

	function handleCancel(e) {
		history.push('/');
	}

	function doubleCheckForm() {
		const errs = {};
		errs.emailErr = formState.email ? '' : 'Required';
		errs.passwordErr = formState.password ? '' : 'Required';
		setFormState({ ...formState, ...errs });
		if (!errs.emailErr && !errs.confirmErr) {
			return true;
		} else {
			return false;
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		setSent(true);
		const url = 'https://davinkibackend.herokuapp.com/api/users/login';
		if (doubleCheckForm()) {
			Axios({
				method: 'post',
				url: url,
				data: {
					email: formState.email,
					password: formState.password,
				},
			})
				.then((res) => {
					setUserInfo({
						username: res.data.username,
						_id: res.data._id,
						email: res.data.email,
					});
					localStorage.setItem('token', res.data.token);
				})
				.catch(console.error)
				.finally(() => history.push('/'));
		} else {
			setSent(false);
			console.log('invalid form');
		}
	}

	function handleChange(e) {
		if (!e.target.value) {
			setFormState({
				...formState,
				[e.target.id + 'Err']: 'Required',
				[e.target.id]: e.target.value,
			});
		} else {
			setFormState({
				...formState,
				[e.target.id + 'Err']: '',
				[e.target.id]: e.target.value,
			});
		}
	}

	return (
		<div className='container sign-up-box center-h'>
			<form className='form-stack sign-up-form' onSubmit={handleSubmit}>
				<h1>Log In</h1>
				<label htmlFor='email'>Email:</label>
				<FormField
					type='email'
					id='email'
					value={formState.email}
					err={formState.emailErr}
					handleChange={handleChange}
				/>
				<label htmlFor='password'>Password:</label>
				<FormField
					type='password'
					id='password'
					value={formState.password}
					err={formState.passwordErr}
					handleChange={handleChange}
				/>
				<button type='submit' disabled={sent}>
					Submit
				</button>
				<button className='err' type='click' onClick={handleCancel}>
					Cancel
				</button>
				<p style={{ display: 'block', margin: '3px' }}>
					Don't have an account?&nbsp;
					<a href='/signup'>Sign up</a>
				</p>
			</form>
		</div>
	);
};

export default LogIn;
