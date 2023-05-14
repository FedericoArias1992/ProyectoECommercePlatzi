import React from 'react';
import styles from "@components/styles/MyAccount.module.scss";
import Header from "@components/Header"; 
import Footer from "@components/Footer"; 

const MyAccount = () => {
	return (
		<>
		<Header />
		<div className={styles.MyAccount}>
			<div className={styles["MyAccount-container"]}>
				<h1 className={styles["title"]}>My account</h1>
				<form action="/" className={styles["form"]}>
					<div>
					<label htmlFor="name" className={styles.label}>Name</label>
					<p className={styles.value}>Nombre Genérico</p>
					<label htmlFor="email" className={styles.label}>Email</label>
					<p className={styles.value}>Nombre_generico@gmail.com</p>
					<label htmlFor="password" className={styles.label}>Password</label>
					<p className={styles.value}>*********</p>
					</div>
					<input type="submit" value="Edit" className={styles['secondary-button']} />
				</form>
			</div>
		</div>
		<Footer />  
		</>
	);
}

export default MyAccount;