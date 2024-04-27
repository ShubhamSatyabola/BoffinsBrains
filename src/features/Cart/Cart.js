import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteCartItemAsync, fetchCartAsync, selectCart, updateCartAsync  } from "./CartSlice";
import { Link } from "react-router-dom";


export function Cart() {
    const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();
  const totalAmount = cartItems.reduce((total, item) => {
    return (
      total +
      item.variants.reduce((amount, variant) => {
        if (item.variant === variant.id) {
          return (
            (item.quantity || 1) *
              parseFloat(variant.presentment.price.replace(/\u20b9/g, "")) +
            amount
          );
        }
        return amount;
      }, 0)
    );
  }, 0);


  const totalItems = cartItems.reduce(
    (total, item) => {
      if(item.quantity){
       total = item.quantity + total;
      }
      else{
        total = 1+total
      }
      return total
      }
      ,
    0
  );

  const handleQuantity = (e, product) => {
    console.log({ ...product, quantity: +e.target.value });
    dispatch(updateCartAsync({ ...product, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteCartItemAsync(id));
  };
  useEffect(() => {
    dispatch(fetchCartAsync())
  },[dispatch])
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="mx-auto bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Cart
          </h1>
          <div className="mt-8 mb-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartItems.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.image.src}
                        alt={product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.title}</a>
                          </h3>
                          {product.variants.map((itemVariants) => {
                            if (product.variant == itemVariants.id) {
                              return (
                                <p className="ml-4">
                                  {itemVariants.presentment.price}
                                </p>
                              );
                            }
                          })}
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.brand}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <label
                            htmlFor="quantity"
                            className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                          >
                            qty
                          </label>
                          <select
                            onChange={(e) => handleQuantity(e, product)}
                            value={product.quantity}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                          </select>
                        </div>

                        <div className="flex">
                          <button
                            onClick={(e) => handleRemove(e, product.id)}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total Amount</p>
              <p>₹{totalAmount}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total Items In Bag</p>
              <p>{totalItems}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                to="/checkout"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      ):null}
    </>
  );
}
