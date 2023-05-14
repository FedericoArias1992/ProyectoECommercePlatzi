import React from 'react';
import flechita from '@icons/flechita.svg';
import Image from 'next/image';
import '@components/styles/Order.scss';

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<Image src={flechita} alt="arrow" />
		</div>
	);
}

export default Order;