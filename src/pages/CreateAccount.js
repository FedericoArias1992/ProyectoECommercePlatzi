import React from 'react';
import styles from '@components/styles/CreateAccount.module.scss';
import Link from 'next/link';

const CreateAccount = () => {
	return (
		<div className={styles["CreateAccount"]}>
			<div className={styles["CreateAccount-container"]}>
				<h1 className={styles["title"]}>My account</h1>
				<form action="/" className={styles["form"]}>
					<div>
						<label htmlFor="name" className={styles["label"]}>Name</label>
						<input type="text" id="name" placeholder="Introducir tu nombre" className={styles["input input-name"]} />
						<label htmlFor="email" className={styles["label"]}>Email</label>
						<input type="text" id="email" placeholder="tunombre@example.com" className={styles["input input-email"]} />
						<label htmlFor="password" className={styles["label"]}>Password</label>
						<input type="password" id="password" placeholder="*********" className={styles["input"]} />
					</div>
						<Link href="/Login">
							<button type="submit" className={styles["primary-button"]}>Create</button>
						</Link>
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;