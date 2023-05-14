import React from 'react';
import logo_yard from '@logos/logo_yard_sale.svg';
import Image from 'next/image';
import Head from "next/head";
import styles from '@components/styles/RecoveryPassword.module.scss';
import Link from 'next/link';

const PasswordRecovery = () => {
	return (
		<div className={styles["PasswordRecovery"]}>
        <Head>
            <title>RecuperarContraseña</title>
        </Head>
			<div className={styles["PasswordRecovery-container"]}>
				<Image src= {logo_yard} alt="logo-yard" className={styles["logo-yard"]}/>
				<h1 className={styles["title"]}>Password recovery</h1>
				<p className={styles["subtitle"]}>Inform the email address used to create your account</p>
				<form action="/" className={styles["form"]}>
					<label htmlFor="email" className={styles["label"]}>Email address</label>
					<input type="text" id="email" className={styles["input"]} />
						<Link href='/SendEmail'>
							<input type="submit" value="Confirm" className={styles["primary-button"]} />
						</Link>
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;