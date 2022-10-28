
import React, { useEffect, useState } from "react";
import useAxios from "../hooks/use-axios";
import Loader from "../components/Loader";
import ProductList from "../components/listing/ProductList";

function Homepage({ children }) {
  const [products, setProducts] = useState([])
  const [filtered_products, setFilteredProducts] = useState([])
  const [category, setCategory] = useState([])
  const [sel_category, setSelCategory] = useState([])

  const {
    error,
    loading,
    sendRequest: fetchItemDelHandler,
  } = useAxios();
  const resHandler = ({ message, products }) => {
    let c_arr = products.map(({ category }) => (category))
    if (message === "Success") {
      setProducts(products)
      setFilteredProducts(products)
      setCategory([...new Set(c_arr)])
    }
  }

  useEffect(() => {
    fetchItemDelHandler(
      {
        url: 'products',
        method: 'GET',
        data: {

        },
      },
      resHandler
    );
  }, [])

  useEffect(() => {
    if (sel_category === "") {
      console.log("dad")
      setFilteredProducts(products)
      return
    }
    const arr = products.filter(el => el.category === sel_category)
    setFilteredProducts(arr)

  }, [sel_category]
  )

  return (
    <div className="Homepage">
      <div style={{
        height: '50px', background: "lightgrey", margin: "0",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <h3 style={{ margin: "0", }}>Product List</h3>
      </div>
      <div style={{ margin: "16px 0" }}>
        <label>Category:</label>
        <select name="products"
          id="products" className="select-product"
          onChange={e => setSelCategory(e.target.value)}>
          <option value={""}>None</option>)
          {category.map(el => <option value={el}>{el}</option>)}
        </select>
        <br />
        {!loading && <ProductList data={filtered_products} />}
        {children}
        {loading && <Loader />}
      </div>

    </div>
  );
}

export default Homepage;
