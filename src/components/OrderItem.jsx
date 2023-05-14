import React from 'react';
import icon_close from '@icons/icon_close.png';

import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';
/*el context lo usamos para poder importar la funcion removeFromCart de useInitialState*/
import styles from '@components/styles/OrderItem.module.scss';

const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove = product => {
		removeFromCart(product); //funcion / al presionar la imagen de la "x", lo borre al item
	}

	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} alt={product?.title} width={640} height={640} />
			</figure>
			<p>{product?.title}</p>
			<p>{product?.price}Bs.</p>
			{/*la idea es que si presiona en cerrar el item, lo borra de los items a comprar*/}
			<Image src={icon_close} alt="close" onClick={()=>handleRemove(product)}/>
 		</div>
	);
}

export default OrderItem;