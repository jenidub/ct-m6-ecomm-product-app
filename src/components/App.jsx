// Import Statements - useState, CSS styling for the App component, and the ProductList component 
import { useState } from 'react'
import '../css/App.css'
import ProductList from './ProductList'

// 1️⃣ App Component (Parent Component)
function App() {
  // Set an initial inventory list for the store - an array of objects
  const initialInventory = [ 
    {
      id: 549,
      name: "Wicked Part 1 Soundtrack",
      price: 29.99,
      description: "The original cast recording of the hit Broadway musical Wicked",
      imageLink: "https://shop.republicrecords.com/cdn/shop/files/REPU-0153_CollectionPage_Prods-01_0003_TargetLP.png?v=1728425734&width=900",
      genre: "Broadway",
      inStock: "Yes"
    },
    {
      id: 178,
      name: "Best of Maverick City Music",
      price: 39.99,
      description: "Tour exclusive live recording of the Oakland Arena concert",
      imageLink: "https://m.media-amazon.com/images/I/41ncDFBYgkL._UXNaN_FMjpg_QL85_.jpg",
      genre: "Gospel",
      inStock: "No"
    },
    {
      id: 344, 
      name: "Best of Whitney Houston", 
      price: 39.99, 
      description: "Listen to the top hits from the legend Whitney Houston", 
      imageLink:"https://cdn.shoplightspeed.com/shops/636018/files/38682664/1500x4000x3/sony-houston-whitney-i-will-always-love-you-the-be.jpg", 
      genre: "R&B",
      inStock: "No"
    },
  ]

  // Set up state for the product list and the list of visible products (to be used in updateVisibility method)
  const [ productList, setProductList ] = useState(initialInventory)
  const [ visibleProducts, setVisibleProducts ] = useState(initialInventory)

  // Render the ProductList component and pass in the product list, visible products in addition
  // the update state methods for each
  return (
    <>
      <div>
        <ProductList
          productList={productList}
          setProductList={setProductList}
          visibleProducts={visibleProducts}
          setVisibleProducts={setVisibleProducts}
        />
      </div>
    </>
  )
}

export default App
