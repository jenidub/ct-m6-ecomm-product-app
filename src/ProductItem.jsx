import PropTypes from "prop-types";
import "./ProductItem.css";

function ProductItem({ productInfo }) {
    return (
        <div key={productInfo.id} className="product-item">
            <h3>{productInfo.name}</h3>
            <img src={productInfo.imageLink} alt={productInfo.id} height="200px" />
            <h4>${productInfo.price}</h4>
            <p>Product ID: {productInfo.id}</p>
            <p className="product-item-desc">Product Description: {productInfo.description}</p>
            <p><i>In Stock? {productInfo.inStock}</i></p>
        </div>
    )
}

export default ProductItem;

ProductItem.propTypes = {
    productInfo: PropTypes.object.isRequired,
}
