# Introduction


This repository contains source code for assesment of product mnagement . The web app is created using React and Redux and Tailwind Css . Other dependecies / libraries used in app are react-router-dom for handling page routing 

for backend we had used JSON-server 

# Key Features

Search Products: Easily find products using the search functionality based on product titles and tags.
Add to Cart: Select and add products to the cart with just a few clicks.
Remove Products: Remove selected products from the cart effortlessly.
Adjust Quantity: Increment or decrement the quantity of selected products in the cart to manage inventory efficiently.


The App comprises of pages like .\
product page : for searching and adding the product , cart for showing the product.\


# Project folder Structure
locate `src` folder .\
`/src/app/store` : folder consist redux store setup  used in project.\
`/src/features/Product` : implementation of search bar and adding product to cart . Consist of Product.js for search bar component , productApi.js for setting up API and ProducSlice.js for setting up actions\
`/src/features/Cart` : implementation of cart functinalities . Consist of Cart.js for cart component , cartApi.js for setting up API and cartSlice.js for setting up actions\
`/src/pages`:  File in this folder consist of pages which combine component  from feature folder .\
`/src/App` : The file in /src folder handles all the render logic used . uses react router dom for routing of pages

## Project set up
In the project directory, you can run:
### `git clone https://github.com/ShubhamSatyabola/BoffinsBrains.git`
clone the repo .
### `npm install`
install  the dependencies used in project.
### `npx json-server --watch data.json --port 8000`
to start json server

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
