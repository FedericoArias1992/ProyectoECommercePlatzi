import React from 'react';
import styles from '@components/styles/ProductInfo.module.scss';
import icon_close from '@icons/icon_close.png';
import Image from 'next/image';

const ProductInfo = ({product, onClose}) => {

  const handleProductClose = () => {
    onClose();
  };

  return (
    <div className={styles['ProductInfo']}>
      <Image src={icon_close} alt="close" className={styles['close_icon']} onClick={handleProductClose} />
      <p>{product.title}</p>
      <figure>
        <Image src={product.images[0]} alt={product.title} width={640} height={640}/>
      </figure>
      <p>{product.price}Bs.</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductInfo;
