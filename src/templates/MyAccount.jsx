import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/123" className="form">
					<div>
					<label htmlFor="name" className="label">Name</label>
					<input className="value" type="text" id="name" />
					<label htmlFor="email" className="label">Email</label>
					<input className="value" type="text" id="email" value="camilayokoo@gmail.com" />
					<label htmlFor="password" className="label">Password</label>
					<input className="value" type="password" id="password" value="*********" />
					</div>
					<input type="submit" value="Edit" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;