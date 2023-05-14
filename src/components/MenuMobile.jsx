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
                <Link href="">Mis pedidos</Link>
            </li>
            <li>
                <Link href="">Mi cuenta</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href="/" className="email">correo_ejemplo@gmail.com</Link>
            </li>
            <li>
                <Link href="/" className="cerrar-sesion">Cerrar Sesion</Link>
            </li>
            </ul>
    </div>
	);
}

export default MenuMobile;