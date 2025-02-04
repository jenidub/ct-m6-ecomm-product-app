import { useState } from 'react'
import './App.css'
import ProductList from './ProductList'

// 1️⃣ App Component (Parent Component)
// This is the main component where you will manage the state for the list of products and 
// pass this data as props to child components.

// Tasks for students:
// Create a state that holds an array of products (each product 
// can have attributes like id, name, price, and description).
// Pass the list of products as a prop to the ProductList component.
// Style the main structure of the app using CSS.

// BONUS: Add a new attribute to each product (like "category") and filter products based on the category.

function App() {
  const initialInventory = [ 
    {
      id: 1,
      name: "Wicked Part 1 Soundtrack",
      price: 29.99,
      description: "The original cast recording of the hit Broadway musical Wicked.",
      imageLink: "https://shop.republicrecords.com/cdn/shop/files/REPU-0153_CollectionPage_Prods-01_0003_TargetLP.png?v=1728425734&width=900",
      genre: "Broadway",
      inStock: "Yes"
    },
    {
      id: 2,
      name: "Best of Maverick City Music",
      price: 39.99,
      description: "Live edition of the Oakland Arena concert - Tour Exclusive",
      imageLink: "https://m.media-amazon.com/images/I/41ncDFBYgkL._UXNaN_FMjpg_QL85_.jpg",
      genre: "Gospel",
      inStock: "No"
    },
    {
      id: 3, 
      name: "Best of Whitney Houston", 
      price: 39.99, 
      description: "Listen to the top hits from the legend Whitney Houston", 
      imageLink:"https://cdn.shoplightspeed.com/shops/636018/files/38682664/1500x4000x3/sony-houston-whitney-i-will-always-love-you-the-be.jpg", 
      genre: "R&B",
      inStock: "No"
    },
  ]

  const [ productList, setProductList ] = useState(initialInventory)
  const [ visibleProducts, setVisibleProducts ] = useState(initialInventory)

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
