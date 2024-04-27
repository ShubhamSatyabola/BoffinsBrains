// A mock function to mimic making an async request for data
export function addToCart(item) {
  
      return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8000/cart", {
          method: "POST",
          body: JSON.stringify(item),
          headers: { "content-type": "application/json" },
        });
        // console.log(response);
        const data = await response.json();
        resolve( {data} );
      });


}


export function fetchCart() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/cart")
    const data = await response.json();
    // console.log(data)
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    console.log(update.id);
    const response = await fetch(`http://localhost:8000/cart/`+update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    // console.log(response);
    const data = await response.json();

    resolve({ data });
  });
}

export function deleteCartItem(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/cart/" + id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    // console.log(response);
    const data = await response.json();

    resolve({ data: { id: id } });
  });
}