
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from '../ProductCard';

function ProductList({ data }) {
  const navigate = useNavigate()
  const [listData, setListData] = useState(data);
  const [nextDisable, setNextDisable] = useState(false);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const newData = data.slice((current - 1) * 6, 6 * (current))
    if (6 * current < data.length) {
      setListData(newData)

    } else setNextDisable(true)
  }, [current])
  useEffect(() => {
    setCurrent(1)
    setListData(data.slice((current - 1) * 6, 6 * (current)))
  }, [data])
  return (<>
    <div className="ProductList">
      {listData.map(product => {
        return <ProductCard item={product} key={product._id} navigate={navigate} />
      })
      }
    </div>
    <div style={{ display: "flex", flexDirection: "row", position: "fixed", bottom: 15, right: 15 }}>
      <div>
        <button disabled={current === 1} onClick={() => {
          setCurrent((current) => current - 1);
          setNextDisable(false);
        }} className="add-button">
          Pre
        </button>
      </div>
      <div>
        <button disabled={nextDisable}
          onClick={() => setCurrent((current) => current + 1)}
          className="add-button">
          Next
        </button>
      </div>
    </div>
  </>
  );
}

export default ProductList;
