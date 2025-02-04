import PropTypes from "prop-types";
import "./ProductItem.css";

function ProductItem({ key, productInfo }) {
    return (
        <div id={key} className="product-item">
            <h3>{productInfo.name}</h3>
            <img src={productInfo.imageLink} alt={key} height="200px" />
            <h4>${productInfo.price}</h4>
            <p>Product Description: {productInfo.description}</p>
            <p><i>In Stock? {productInfo.inStock}</i></p>
        </div>
    )
}

export default ProductItem;

ProductItem.propTypes = {
    productInfo: PropTypes.object.isRequired,
    key: PropTypes.number,
}
