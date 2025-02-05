# JeniDub Record Shop E-Commerce React App

## Overview

This is a simple e-commerce application built with **React** using the **Vite** infrastructure. The app displays a list of music album products, allows users to add new albums, delete albums by ID, and filter the list to show only R&B genre products.

## Features

-   Display a list of music albums available in the store
-   Add new albums via a user prompt
-   Delete albums by entering the product ID
-   Toggle visibility of albums - show/hide R&B in v1
-   Uses React state management (`useState`) for dynamic updates

## Component Breakdown

### `App.jsx`
-   Manages the state of the product list (`productList` and `visibleProducts`).
-   Initializes the inventory with a predefined set of products.
-   Renders the `ProductList` component and passes state and update functions as props.

### `ProductList.jsx`
-   Displays the list of albums available in the store.
-   Allows users to add a new album via `addProduct()`.
-   Allows users to delete an album via `deleteProduct()`.
-   Toggles the visibility of R&B albums using `updateVisibleList()` [v1]
-   Uses the `ProductItem` component to render individual album details.

### `ProductItem.jsx`
-   Displays a single album's details including name, price, genre, and stock status.
-   Uses **PropTypes** for type-checking to ensure data integrity.

## Dependencies
-   React
-   Vite
-   PropTypes (for prop validation)

## License and Credits
This project is open-source and available under the **MIT License**.
The README file was created using ChatGPT
