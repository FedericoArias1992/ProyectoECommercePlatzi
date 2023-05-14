import React from "react";
import OrderItem from "@components/OrderItem";
import { useContext } from "react";
import AppContext from "@context/AppContext";
import Head from "next/head";
import Header from "@components/Header"; //En React teniamos que en el archivo App.jsx TODAS las rutas a las distintas páginas.
import Footer from "@components/Footer"; //Ahora en Next, recordemos que nuestra ruta de entrada es el index.js
import styles from "@components/styles/Checkout.module.scss";

const Checkout = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <Header />
      <Head>
        <title>🛒Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles["Checkout-container"]}>
          <h1 className={styles["title"]}>My order</h1>
          <div className={styles["Checkout-content"]}></div>
          <div className={styles["cart-product-list"]}>
            {" "}
            {/*esta es la nueva clase para resolver el reto 2*/}
            {state.cart.map((product) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
            ))}
          </div>
          <div className={styles["order"]}>
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>200Bs.</p>
          </div>
        </div>
      </div>
      <Footer />  
    </>
  );
};

export default Checkout;
