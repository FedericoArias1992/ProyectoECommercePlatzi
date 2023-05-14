import React from 'react';
import Image from 'next/image';
import '@components/styles/SendEmail.scss';
import Link from 'next/link'; 
import logo_yard from '@logos/logo_yard_sale.svg';
import logo_email from '@icons/email.svg';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<Image src={logo_yard} alt="logo"  />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<Image src= {logo_email} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<Link href="/">Resend</Link>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;