import React from 'react';
//import '@components/styles/Menu.scss';
import styles from '@components/styles/Menu.module.scss';
import Link from 'next/link';

const Menu = () => {
	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<Link href="/" className={styles.title}>My orders</Link>
				</li>
				<li>
					<Link href="/MyAccount"> My account</Link>
				</li>
				<li> <Link href="/Login"> Sign out </Link>
				</li>
			</ul>
		</div>
	);
}

export default Menu;