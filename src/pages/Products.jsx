import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:2000/products/1");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div key={products.id}>
        <h2>{products.title}</h2>
        <p>{products.description}</p>
        <p>{products.price}</p>
        <p>{products.discountPercentage}</p>
        <p>{products.rating}</p>
        <p>{products.stock}</p>
      </div>
    </>
  );
};

export default Products;
