// SearchComponent.js

import React, { useEffect, useState } from "react";
import "../../App.css"

import { useDispatch, useSelector } from "react-redux";
import { fetchProductAsync, selectProduct } from "./productSlice";
import { addToCartAsync } from "../Cart/CartSlice";

export function SearchComponent(){
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const products = useSelector(selectProduct)
  //products fetching
  const dispatch = useDispatch() 
  useEffect( () => {
    dispatch(fetchProductAsync())
  } , [] );
  


   const onClose = () => {
    setSearchTerm("");
    setSearchResults([]);
   };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if(value){
      const filteredResults = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
    else{
      setSearchResults([])
    }
    
  };

  const handleAdd = () => {
    const selectedProducts = searchResults.filter(
      (product) => product.selected 
    );
    selectedProducts.forEach( (product)=>{
      dispatch(addToCartAsync(product));
    })
     

    setSearchTerm("");
    setSearchResults([]);
  };

  const handleChange = (productId) => {
    let updatedSearch = []
    for(let product of searchResults){
      if(product.id == productId && !product.selected){
         const selectProduct = { ...product, selected: true };
         updatedSearch.push(selectProduct);
  
      }
      else if(product.id == productId && product.selected){
       const unselectProduct = {...product, selected: false}
       updatedSearch.push(unselectProduct)
    }
      
      else{
      updatedSearch.push(product)
    }
    }
    setSearchResults(updatedSearch)
    
  

  }

   const handleVariantSelect = (productId, variantId) => {
      let updatedSearch = [];
      for (let product of searchResults) {
        if (product.id == productId && product.selected && !product.variant) {
          const productVariant = { ...product,  variant: variantId};
          updatedSearch.push(productVariant);
        }
        else if (product.id == productId && product.selected && product.variant) {
          if(product.variant == variantId){
              const productVariant = { ...product, variant: null };
              updatedSearch.push(productVariant);
          }
          else{
            const productVariant = { ...product, variant: variantId };
          updatedSearch.push(productVariant);
          }
          
        } else {
          updatedSearch.push(product);
        }
      }
      setSearchResults(updatedSearch);
    };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchResults.length > 0 ? (
        <div className="search-results">
          {searchResults.map((product) => (
            <div key={product.id}>
              <div className="list-search">
                <input
                  type="checkbox"
                  checked={product.selected || false}
                  onChange={() => handleChange(product.id)}
                />
                <img src={product.image.src} alt="" />
                <label>{product.title}</label>
              </div>

              {product.selected &&
                !product.has_only_default_variant &&
                product.variants && (
                  <div>
                    {product.variants.map((variant) => (
                      <div className="variant" key={variant.id}>
                        <input
                          type="checkbox"
                          checked={product.variant == variant.id || false}
                          onChange={() =>
                            handleVariantSelect(product.id, variant.id)
                          }
                        />
                        <label>{variant.title}</label>
                        <p>{variant.inventory_available} available</p>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ))}
          <div className="search-actions">
            <button className="submit" onClick={handleAdd}>
              Add
            </button>
            <button className="close" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

