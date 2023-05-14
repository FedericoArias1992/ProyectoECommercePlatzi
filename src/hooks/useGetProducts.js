import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //la funcion, y un segundo argumento, el cual sera un arreglo para "escuchar" eventos o cambios
    const getProducts = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    getProducts();
  }, [API]); //// Include API in the dependency array:ensures that the data will always be up-to-date
  return products;
};

export default useGetProducts;
