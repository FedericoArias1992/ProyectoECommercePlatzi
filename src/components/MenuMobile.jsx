import React from 'react';
import styles from '@components/styles/MenuMobile.module.scss';
import Link from 'next/link';

const MenuMobile = () => {
    return (
        <div className={styles["mobile-menu"]}> 
        <ul>
            <li>
                <Link href="/">CATEGORIES</Link>
            </li>
            <li>
                <Link href="/">All</Link>
            </li>
            <li>
                <Link href="/">Clothes</Link>
            </li>
            <li>
                <Link href="/">Electronics</Link>
            </li>
            <li>
                <Link href="/">Furnitures</Link>
            </li>
            <li>
                <Link href="/">Toys</Link>
            </li>
            <li>
                <Link href="/">Other</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="/checkout">My Orders</Link>
            </li>
            <li>
                <Link href="/MyAccount">My Account</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="/MyAccount" className={styles["email"]}>correo_ejemplo@mail.com</Link>
            </li>
            <li>
                <Link href="/Login" className={styles["cerrar-sesion"]}>Log out</Link>
            </li>
            </ul>
    </div>
	);
}

export default MenuMobile;