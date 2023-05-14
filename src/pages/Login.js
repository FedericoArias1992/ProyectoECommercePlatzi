import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
//import Menu from '../components/Menu';    -   usamos la notacion en verde para mostrar un componente (Menu.jsx) en la plantilla de login
import {useRef} from 'react';
//https://developer.mozilla.org/en-US/docs/Web/API/FormData - mas sobre formData
import Image from 'next/image';
import Head from "next/head";
import Link from 'next/link';
import styles from '@components/styles/Login.module.scss';

const Login = () => {
    const form = useRef(null);  //inicializamos con valor nulo pq los elementos usuario y contraseña no tienen valor hasta que son ingresados los inputs
    const handleSubmit =()=>{   //es la funcion que leerá los inputs del formulario, tenemos que poner el 'event' para usar la linea de abajo
        //event.preventDefault();     para evitar que html lo maneje estandar y envie los inputs por la url y los mande al /home
        const formdata = new FormData(form.current);
		const data = {
			username:formdata.get("email"), //con el name="email" de la línea 24, formdata.get es nativo de js
			password:formdata.get("password")  //con el name="password" de la línea 25
		}
		console.log(data)//por ahora no se manda al backend y lo imprimimos por consola
	}
    return (
            <div className={styles.login}>
                <Head>
                    <title>Login</title>
                </Head>
                <div className={styles["Login-container"]}>
                    <Image src={logo} alt="logo" className={styles['logo']}/>
                    <form action="/" className={styles["form"]} ref={form}> {/*el ref hace referencia al form de la linea 9*/}
                        <label htmlFor="email" className={styles["label"]}>Email address</label>
                        <input type="text" name="email" placeholder="platzi@example.com" className={styles["input"]} />
                        <label htmlFor="password" className={styles["label"]}>Password</label>
                        <input type="password" name="password" placeholder="*********" className={styles["input"]} />
                        <Link href='/'>
                            <button onClick={handleSubmit} className={styles["primary-button"]}> Log in</button>
                        </Link> {/*al hacer click en el botón, acciona la funcion de la línea 10*/}
                        <Link className={styles['forgot']} href="/PasswordRecovery">Forgot my password</Link>
                    </form>
                    <Link href='/CreateAccount'>
                        <button className={styles["secondary-button"]}> Sign up </button>
                    </Link>
                </div>
            </div >
            /* <div className="Menu">
                <Menu /> 
            </div>*/
        );
    }
    
    export default Login;        


