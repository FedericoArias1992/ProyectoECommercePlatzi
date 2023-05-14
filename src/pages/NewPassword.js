import React from 'react';
import Image from 'next/image';
import styles from '@components/styles/NewPassword.module.scss';
import logo_yard from '@logos/logo_yard_sale.svg';


const NewPassword = () => {
	return (
		<div className={styles["NewPassword"]}>
			<div className={styles["NewPassword-container"]}>
				<Image src= {logo_yard} alt="logo" className={styles["logo_imagen"]} />
				<h1 className={styles["title"]}>Create a new password</h1>
				<p className={styles["subtitle"]}>Enter a new password for your account</p>
				<form action="/" className={styles["form"]}>
					<label htmlFor="password" className={styles["label"]}>Password</label>
					<input type="password" id="password" placeholder="*********" className={styles["input-password"]} />
					<label htmlFor="new-password" className={styles["label"]}>New Password</label>
					<input type="password" id="new-password" placeholder="*********" className={styles["input-password"]} />
					<button className={styles["primary-button"]}>Confirm</button>
				</form>
			</div>
		</div>
	);
};

export default NewPassword;