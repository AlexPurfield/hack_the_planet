
import React, { useState, useEffect } from 'react';

const ProductsPage = () => {
  
  const [products, setProducts] = useState([	{
    name: "",
    price: 0,
    image:
        "",

    short_desc: "",

},]);
let query = {
	"query": "query ExampleQuery { products { name _id price image short_desc category { _id name }}}"
}

  const fetchAllProductData = async () => { 
    const response = await fetch('http://localhost:3001/graphql', {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(query)
  });
  console.log(response);

  } 

  
  useEffect(async () => {await fetchAllProductData();

}); 
  
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
        };


export default ProductsPage;