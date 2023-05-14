import "@components/styles/globals.css";
import AppContext from "@context/AppContext"; //al pasar de React a NextJs es necesario importar los hooks acá en _app.js
import useInitialState from "@hooks/useInitialState";

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      {" "}
      {/*Esta parte en React estaba en archivo App.jsx*/}
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
