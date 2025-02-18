// Import Statements for PropTypes (data verification), CSS styling for the component
import PropTypes from "prop-types";
import '../css/ProductItem.css';

// 3️⃣ ProductItem Component
// Render the product listing for a single product in the store 
// using the productInfo prop to display all included product details
function ProductItem({ productInfo }) {
    return (
        <div key={productInfo.id} className="product-item">
            <h3 className="subheader product-item-spacing">{productInfo.name}</h3>
            <img src={productInfo.imageLink} alt={productInfo.id} />
            <h4 className="product-item-price product-item-spacing">${productInfo.price}</h4>
            <h4 className="product-item-genre product-item-spacing">Genre: {productInfo.genre}</h4>
            <p className="product-item-id product-item-spacing">Product ID: {productInfo.id}</p>
            <p className="product-item-desc product-item-spacing">{productInfo.description}</p>
            <p><i>In Stock?&nbsp;&nbsp; 
                { productInfo.inStock === "Yes" ? 
                    <span className="in-stock-yes">{productInfo.inStock}</span>
                    : <span className="in-stock-no">{productInfo.inStock}</span>
                }
            </i></p>
        </div>
    )
}

export default ProductItem;

// PropTypes for the ProductItem component
// Check the passed data type for each prop and check if it is required
ProductItem.propTypes = {
    productInfo: PropTypes.object.isRequired,
}
