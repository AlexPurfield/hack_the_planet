
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
    method: "POST",
    mode: "no-cors", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json"
     
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(query)
  })
// //   .then( (response)=> {
// //     return response.json
//   }) ;
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