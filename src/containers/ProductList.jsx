import React from 'react';
import ProductItem from '@components/ProductItem';
import styles from '@components/styles/ProductList.module.scss';
import Header from "@components/Header"; 
import Footer from "@components/Footer"; 


//En verde: Ejemplo de uso de useEffect para mostrar los productps desde una API
const API = 'https://api.escuelajs.co/api/v1/products?limit=12&offset=2';

import '@hooks/useGetProducts';
import useGetProducts from '@hooks/useGetProducts';
import Head from 'next/head'; //para poner el titulo en el navegador

const ProductList = () => {
	const products = useGetProducts(API); //llamamos al custom hook
/*	const [products, setProducts] = useState([]);
	useEffect(() => {       //la funcion, y un segundo argumento, el cual sera un arreglo para "escuchar" eventos o cambios
        const getProducts = async () => {
            const response = await axios(API);
            setProducts(response.data);
		};
        getProducts();
	}, []);
*/
	return (
		<>
		<Header />
		<section className={styles["main-container"]}>
			<Head>
    	    	<title>🛍️LaEstrella E-Shop</title>
			</Head>
			<div className={styles.ProductList}> {/*Vamos iterar por cada uno de los productos que traiga la API*/}
				{products.map(product=>(	//products y hacer el render del ProductItem - Tener en cuenta que el productList es el contenedor
				<ProductItem product={product} key={product.id} />		//de los varios productItem
			))}
			</div>
		</section>
		<Footer />  
		</>
	);
}

export default ProductList;