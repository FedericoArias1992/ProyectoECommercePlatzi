import React from 'react';
import OrderItem from '../components/OrderItem';
import flechaImg from '@icons/flechita.svg';

//vamos a usar useContext para pasar los items agregados al carrito a este componente
//del checkout
import {useContext} from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';

//para que al presionar el elemento boton Checkout, debemos importar el link:
import Link from 'next/link';
import styles from '@components/styles/MyOrder.module.scss';

const MyOrder = ({ toggleOrders, setToggleOrders }) => { /*Pasamos como argumentos las props de Header.jsx - reto 3*/
	const { state } = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0); //el cero es para asignar el valor inicial de la funcion sumTotal
		return sum;
	}
	return (
		<aside className={styles.MyOrder}>
			<div className={styles["title-container"]}>
				<Image src={flechaImg} alt="arrow" onClick={() => setToggleOrders(!toggleOrders)}/>
				<p className={styles.title}>My order</p>
			</div>
			<div className={styles["my-order-content"]}> {/*abajo pasamos los items agregados al carrito a la seccion actual del menu de checkOut */}
				<div className={styles["cart-product-list"]}> {/*esta es la nueva clase para resolver el reto 2*/}
    		        {state.cart.map((product) => (
            		<OrderItem product={product} key={`orderItem-${product.id}`} />
			        ))}
		        </div>
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link className={styles["primary-button"]} href="/checkout">
					Checkout
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;