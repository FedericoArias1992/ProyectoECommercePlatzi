import React from 'react';
import imagenLogo from '@logos/favicon_yard_sale.svg';
import Image from 'next/image';
import styles from '@components/styles/footer.module.scss';


const Footer = () => {
    return (
        <div className={styles.piepagina}>
            <footer>
                <div className={styles['datos-personales']}>
                    <p>Author: Federico Arias</p>
                    <p>Contact: <a href="mailto:f_ariassuarez@hotmail.com">f_ariassuarez@hotmail.com</a></p>
                </div>
            </footer>
            <div className={styles.iconContainer}>
                <Image src={imagenLogo} alt={imagenLogo} width={60} height={60} />
            </div>
        </div>    
    );
}
export default Footer;