import React, { useEffect, useState } from "react";
import "./Product.css";
import { useParams } from "react-router-dom";
import axios from "axios";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          ` https://ill-pink-coati-tie.cyclic.app/api/posts/${id}`
        );
        setProduct(reponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(product);

  return (
    <div className="pr">
      <div className="container">
        {product && (
          <div>
            <p className="p10">{product.title}</p>
            <p className="p11">{product.category}</p>
            <img className="img-product-1" src={product.image} alt="" />
            <p className="p12">{product.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
