// 2️⃣ ProductList ComponentThis component will receive the list of products 
// from the App component as a prop and will map through them to display each product.
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import './ProductList.css'

// Tasks for students:
// Create a component that takes the product list as a prop and maps through it.
// For each product, render a ProductItem component.
// Apply custom CSS to style the product list.

function ProductList({ productList, setProductList, visibleProducts, setVisibleProducts }) {
    let initialItemCount = 4;
    console.log(initialItemCount)

    const addProduct = () => {
        const newProduct = {}
        let currentProductList = productList;
    
        newProduct.name = prompt("Enter the name of the new album: ");
        newProduct.price = prompt("Enter the listing price (ex. 19.99): ");
        newProduct.imageLink = prompt("Please copy and paste the image link for the product: ");
        newProduct.description = prompt("Please enter a brief description of the album: ");
        newProduct.genre = prompt("What is the primary genre for the album: ");
        newProduct.id = initialItemCount += 1;
        newProduct.inStock = "Yes";
        
        currentProductList.push(newProduct)
        setProductList([...currentProductList])
        setVisibleProducts([...currentProductList])
        initialItemCount += 1;
    }

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
            console.log("updated currentProductList: ", currentProductList)
            setProductList([...currentProductList])
            setVisibleProducts([...currentProductList])
        }
    }

    const updateVisibleList = () => {
        let visibleListNow = visibleProducts;
        let filteredList = visibleProducts.filter((product) => product.genre === "R&B")
        
        console.log("productList: ", productList)
        console.log("visibleList: ", visibleListNow)
        console.log("filteredList: ", filteredList)

        if (visibleListNow.length !== filteredList.length) {
            setVisibleProducts([...filteredList])
        } else {
            setVisibleProducts([...visibleListNow])
        }
    }

    return (
        <div>
            <h1>Welcome to the JeniDub Record Shop</h1>
            <h2>Here is the list of products we have for all of you vintage lovers out there!</h2>
            <div className="product-list">
                {productList.map((productInfo) => {
                    return <ProductItem key={productInfo.id} productInfo={productInfo} />
                })}
            </div>
            <div className="product-list-buttons">
                <button onClick={() => addProduct()}>Add New Product</button>
                <button onClick={() => deleteProduct()}>Delete Product by ID</button>
                <button onClick={() => updateVisibleList()}>Show Only R&B</button>
            </div>
        </div>
    )
}

export default ProductList;

ProductList.propTypes = {
    productList: PropTypes.array.isRequired,
    initialProductList: PropTypes.array,
    setProductList: PropTypes.func.isRequired,
    setInitialProductList: PropTypes.func,
    visibleProducts: PropTypes.array.isRequired,
    setVisibleProducts: PropTypes.func.isRequired,
}
