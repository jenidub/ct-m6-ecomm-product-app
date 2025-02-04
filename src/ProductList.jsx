// 2️⃣ ProductList ComponentThis component will receive the list of products 
// from the App component as a prop and will map through them to display each product.
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import './ProductList.css'

// Tasks for students:
// Create a component that takes the product list as a prop and maps through it.
// For each product, render a ProductItem component.
// Apply custom CSS to style the product list.

function ProductList({ productList, setProductList}) {
    const addProduct = () => {
        const newProductName = prompt("Enter the name of the new album: ");
        const newProductPrice = prompt("Enter the listing price (ex. 19.99): ");
        const newProductImageLink = prompt("Please copy and paste the image link for the product: ");
        const newProductDescription = prompt("Please enter a brief description of the album: ");
        const newProductGenre = prompt("What is the primary genre for the album: ");
        
        setProductList([...productList, {
            name: newProductName,
            price: newProductPrice,
            description: newProductDescription,
            imageLink: newProductImageLink,
            genre: newProductGenre,
            inStock: "Yes",
        }])
    }

    return (
        <div>
            <h1>Welcome to the JeniDub Record Shop</h1>
            <h2>Here is the list of products we have for all of you vintage lovers out there!</h2>
            <div className="product-list">
                {productList.map((productInfo, index) => {
                    return <ProductItem key={index} productInfo={productInfo} />
                })}
            </div>
            <button onClick={() => addProduct()}>Add New Product</button>
            {/* <button onClick={() => updateVisibleList()}>Show Only R&B</button> */}
        </div>
    )
}

export default ProductList;

ProductList.propTypes = {
    productList: PropTypes.array.isRequired,
    setProductList: PropTypes.func.isRequired,
}
