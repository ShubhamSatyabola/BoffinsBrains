// A mock function to mimic making an async request for data
export  function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/data");
    const data = await response.json();
    console.log(data)
    resolve({ data });
  });
}

