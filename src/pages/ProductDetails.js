import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Loader from '../components/Loader';
import useAxios from "../hooks/use-axios";

function ProductDetails() {
  const [product, setProductDetails] = useState({})
  const { productId } = useParams()

  const {
    error,
    loading,
    sendRequest: fetchItemDelHandler,
  } = useAxios();

  const resHandler = ({ message, product }) => {
    message === "Success" && setProductDetails(product)
  }
  useEffect(() => {
    fetchItemDelHandler(
      {
        url: 'products' + '/' + productId,
        method: 'GET',
      },
      resHandler
    );
  }, [])

  const navigate = useNavigate();
  if (loading) {
    return <Loader />
  }
  return (
    <div className="ProductDetails">
      <Link className="back-link" to={'/'} >Back</Link>
      <h2>product Details:</h2>
      <div>
        <div className="img-ctnr-lg">
          <img src={product.avatar} style={{ width: 'auto', height: "35vh" }} alt="img" />
        </div>
        <div>
          <div className={"flex"}>
            <h5>Name: </h5>
            <p style={{ marginLeft: "8px" }}>{product.name}</p>

          </div>
          <div className={"flex"}>
            <h5>Category:  </h5>
            <p style={{ marginLeft: "8px" }}>{product.category}</p>
          </div>
          <div className={"flex"}>
            <h5>description:  </h5>
            <p style={{ marginLeft: "8px" }}>{product.description}</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
