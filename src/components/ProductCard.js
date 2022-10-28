
const ProductCard = ({ item, navigate }) => {

    return (
        <div className="product-card-container">
            <div className="img-ctnr-sm">
                <img src={item.avatar} className="avatar" alt="img" />
            </div>

            <p className="pmargin minheight">
                {item.name}
            </p>
            <div className="row">

                <p className="pmargin2">$ {item.price}/-</p>
            </div>
            <button onClick={() => navigate(`../products/${item._id}`)}
                className="add-button" >Know more +</button>
        </div>
    )

}
export default ProductCard;