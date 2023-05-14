import React from 'react';
import Image from 'next/image';
import styles from '@components/styles/SendEmail.module.scss';
import Link from 'next/link'; 
import logo_yard from '@logos/logo_yard_sale.svg';
import logo_email from '@icons/email.svg';

const SendEmail = () => {
	return (
		<div className={styles["SendEmail"]}>
			<div className={styles["form-container"]}>
				<Image src={logo_yard} alt="logo"  />
				<h1 className={styles["title"]}>Email has been sent!</h1>
				<p className={styles["subtitle"]}>Please check your inbox for instructions on how to reset the password</p>
				<div className={styles["email-image"]}>
					<Image src= {logo_email} alt="email" />
				</div>
                <Link href='/Login'>
				    <button className={styles["primary-button"]}>Login</button>
                </Link>
				<p className={styles["resend"]}>
					<span>Did not receive the email?</span>
				</p>
                <Link href='/PasswordRecovery'>
						<button>Resend</button>
				</Link>
			</div>
		</div>
	);
}

export default SendEmail;