// Import Statements for PropTypes (data verification), CSS styling for the component, 
// and the ProductItem component
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import '../css/ProductList.css'

// ** FEATURE UPDATE **
// Develop another component like a ProductForm that uses the input elements, 
// so you can render when the user clicks the add a new product button.

// 2️⃣ ProductList Component
// For each product, render a ProductItem component and apply custom CSS to style the product list.
function ProductList({ productList, setProductList, visibleProducts, setVisibleProducts }) {    
    // addProduct method
    // Prompts the user to enter details about a new product to list on the site
    // After collecting the info from the user, a new product object is created and added to the product list
    const addProduct = () => {
        const newProduct = {}
        let currentProductList = productList;
    
        newProduct.name = prompt("Enter the name of the new album: ");
        newProduct.price = prompt("Enter the listing price (ex. 19.99): ");
        newProduct.imageLink = "https://placehold.co/200x150"
        newProduct.description = prompt("Please enter a brief description of the album: ");
        newProduct.genre = prompt("What is the primary genre for the album: ");
        newProduct.id = Math.floor(Math.random() * 1000);
        newProduct.inStock = "Yes";

        currentProductList.push(newProduct)
        setProductList([...currentProductList])
        setVisibleProducts([...currentProductList])
    }

    // deleteProduct method
    // Prompts the user for the product ID they would like to delete from the productList
    // Updates the state for productList and visibleProducts to reflect the deletion
    const deleteProduct = () => {
        let currentProductList = productList;
        let foundIndex = -1;

        const productID = prompt("Enter the product ID of the listing you would like to delete: ")
        for (let i = 0; i < currentProductList.length; i++) {
            if (currentProductList[i].id === parseInt(productID)) {
                foundIndex = i;
                break;
            }
        }

        if (foundIndex !== -1) {
            currentProductList.splice(foundIndex, 1)
            setProductList([...currentProductList])
            setVisibleProducts([...currentProductList])
        }
    }

    // updateVisisbleList method
    // Filters the visibleProducts list to only show products with the genre "R&B"
    // If the view is already filtered, it will restore the view to the full productList
    const updateVisibleList = (genre) => {
        let visibleListNow = visibleProducts;
        let filteredList = visibleListNow.filter(product => product.genre === genre)

        if (visibleListNow.length !== filteredList.length) {
            setVisibleProducts([...filteredList])
        } else {
            setVisibleProducts([...productList])
        }
    }

    // Render of the ProductList component
    // Includes the header, the list of products, and buttons for the three methods
    return (
        <div>
            <h1 className="rampart-one-header">Welcome to the JeniDub Record Shop</h1>
            <h2>Here is the list of products we have for all of you vintage lovers out there!</h2>
            <div className="product-item-container">
                {/* Map the visibleProducts array to render a ProductItem component for each product */}
                {visibleProducts.map((productInfo) => {
                    return <ProductItem key={productInfo.id} productInfo={productInfo} />
                })}
            </div>
            {/* Buttons for adding a new product, deleting a product by ID, and updating the visible list */}
            <div className="buttons-container">
                <button onClick={() => addProduct()}>Add New Product</button>
                <button onClick={() => deleteProduct()}>Delete Product by ID</button>
                <button onClick={() => updateVisibleList("R&B")}>Show/Hide R&B Genre</button>
            </div>
        </div>
    )
}

export default ProductList;

// PropTypes for the ProductList component
// Check the passed data type for each prop and check if it is required
ProductList.propTypes = {
    productList: PropTypes.array.isRequired,
    initialProductList: PropTypes.array,
    setProductList: PropTypes.func.isRequired,
    setInitialProductList: PropTypes.func,
    visibleProducts: PropTypes.array.isRequired,
    setVisibleProducts: PropTypes.func.isRequired,
}
