import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import menu from '@icons/icon_menu.svg';
import shopping_cart from '@icons/icon_shopping_cart.svg';

//Vamos a trabajar para hacer el toggle que permita aparecer el Menu al clickear en el carrito de compras:
import { useState } from 'react';//importamos la libreria 
import Menu from '@components/Menu'; //si queremos mostrar otro elemento, debemos importarlo y agregarlo al HTML

//para el hook que hace que aparezca el numero de productos nel carrito
import AppContext from '../context/AppContext';
import {useContext} from 'react';
//En next para mostrar imagenes, debemos importar de la siguiente manera:
import Image from 'next/image';
//Vamos a mostrar el checkOut:
import MyOrder from '../containers/MyOrder'; 
import MenuMobile from '../components/MenuMobile';
import Link from 'next/link'; //para poder volver al home si presionamos el logo yarsale
//import '../components/styles/Header.scss'; -->Eso cambia de React a NextJs se agrega el .module a extension del archivo scss
import styles from '@components/styles/Header.module.scss';

const Header = () => {
    const [toggle,setToggle] =useState(false); /*Definimos que el menu no se muestre por defecto (false) hasta que se clickee*/;
    
    const handleToggle = () => {
        setToggle(!toggle); /*ponemos el ! para que cambie el valor de toggle a su inversa: de False a True y True a False con cada click en el elemento*/
                           /*Idenificamos el elemento el cual hará que al click se muestre el menu: navbar-email*/
        }
    const { state } = useContext(AppContext);  //necesitamos el estado de context para revisar lo que esta dentro del carrito de compras
        //ahora vamos a hacer la validacion, si AppContext tiene algun elemento(item), entonces voy a mostrar la cantidad en el carrito
    const [toggleOrders,setToggleOrders] = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);    
    return (
        <nav className={styles.nav}> {/*asi se importan los estilos, como variables*/}
            <Image src={menu} alt="menu" className={styles.menu} onClick={() => setToggleMobileMenu(!toggleMobileMenu)} /> {/*Este es el ícono para mobile version - reto 5 / al presionar, muestre el menu de mobile*/}
            {toggleMobileMenu && <MenuMobile />}
            <div className={styles['navbar-left']}>  
                <Link href="/"> 
                    <Image src={logo} alt="logo" className={styles['logo']}/>
                </Link>                 
                <ul>
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
                        <Link href="/">Others</Link>
                    </li>
                </ul>
            </div>
            <div className={styles['navbar-right']}>
                <ul>
                    <button className={styles["navbar-email"]} onClick={handleToggle}>tucuenta@example.com</button>
                    <li className={styles["navbar-shopping-cart"]}>
                        <Image src= {shopping_cart} alt="shopping cart" onClick={()=>setToggleOrders(!toggleOrders)} /> {/*la hacemos funcion anónima pq sino se ejecuta cada instante y hace loop infinito*/}
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}	{/*si el largo de cart es mayor a cero, entonces muestro el*/}
                    </li>           {/*largo del vector cart (cart es vector de objetos items productos, caso contrario muestro nulo*/}
                </ul>               {/*Algo wichtig: el div lo pusimos asi tal que cuando cart es nulo, no aparezca el circulito vacio, segun css el estilo del circulo verde este para ese div, dentro de li*/}
            </div>                              
                {toggle && <Menu />} {/*Solo muestra el menu si toggle es verdadero y lo muestra fuera del div pero dentro del nav */}
                                     {/*ver el archivo de la clase 11 para mas acerca del &&*/}
                {toggleOrders && <MyOrder toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>} {/*para desplegar el checkout con el click*/}
        </nav>   
    );
}

export default Header;
