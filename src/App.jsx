import { useState } from 'react'
import './App.css'
import ProductList from './ProductList'

// 1️⃣App Component (Parent Component)
// This is the main component where you will manage the state for the list of products and 
// pass this data as props to child components.

// Tasks for students:
// Create a state that holds an array of products (each product 
// can have attributes like id, name, price, and description).
// Pass the list of products as a prop to the ProductList component.
// Style the main structure of the app using CSS.

// BONUS: Add a new attribute to each product (like "category") and filter products based on the category.

function App() {
  const [ productList, setProductList ] = useState([ 
    {
      key: 1,
      name: "Wicked the Movie Sdtrk",
      price: 29.99,
      description: "The original cast recording of the hit Broadway musical Wicked.",
      imageLink: "https://shop.republicrecords.com/cdn/shop/files/REPU-0153_CollectionPage_Prods-01_0003_TargetLP.png?v=1728425734&width=900",
      genre: "Broadway",
      inStock: "Yes"
    },
    {
      key: 2,
      name: "Best of Maverick City Music",
      price: 39.99,
      description: "Live edition of the Oakland Arena concert - Tour Exclusive",
      imageLink: "https://store.elevationchurch.org/cdn/shop/products/OCB_VINYLcopy.jpg?v=1619815074",
      genre: "Gospel",
      inStock: "No"
    },
    {
      key: 3, 
      name: "Lizzo", 
      price: 24.99, 
      description: "The album that started it all for the worldwide megastar Lizzo.", 
      imageLink: "https://i.discogs.com/63Il66qYl9hE1VSVL4cTBENrT16UrodtnUvNfRrfkkc/rs:fit/g:sm/q:90/h:506/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MTgw/ODM3LTE1NjkzNjMx/NTAtMjg3My5qcGVn.jpeg", 
      genre: "R&B",
      inStock: "Yes"
    },
    {
      key: 4, 
      name: "Best of Whitney Houston", 
      price: 39.99, description: "Listen to the top hits from the legendary music icon Whitney Houston", 
      imageLink:"https://cdn.shoplightspeed.com/shops/636018/files/38682664/1500x4000x3/sony-houston-whitney-i-will-always-love-you-the-be.jpg", 
      genre: "R&B",
      inStock: "No"},
  ])

  return (
    <>
      <div>
        <ProductList productList={productList} setProductList={setProductList} />
      </div>
    </>
  )
}

export default App
