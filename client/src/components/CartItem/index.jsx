import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../utils/queries';
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";
// < =============== stevens code ===================== >
// import Cart from '../components/Cart';
// import { useStoreContext } from '../utils/Global';
// import { idbPromise } from '../utils/helpers';
// import { QUERY_PRODUCTS } from '../utils/queries';
// import {
//   REMOVE_FROM_CART,
//   UPDATE_CART_QUANTITY,
//   ADD_TO_CART,
//   UPDATE_PRODUCTS,
// } from '../utils/actions';


// function Detail() {
//   const [state, dispatch] = useStoreContext();
//   const { id } = useParams();

//   const [currentProduct, setCurrentProduct] = useState({});

//   const { loading, data } = useQuery(QUERY_PRODUCTS);

//   const { products, cart } = state;

//   useEffect(() => {
//     // already in global store
//     if (products.length) {
//       setCurrentProduct(products.find((product) => product._id === id));
//     }
//     // retrieved from server
//     else if (data) {
//       dispatch({
//         type: UPDATE_PRODUCTS,
//         products: data.products,
//       });

//       data.products.forEach((product) => {
//         idbPromise('products', 'put', product);
//       });
//     }
//     // get cache from idb
//     else if (!loading) {
//       idbPromise('products', 'get').then((indexedProducts) => {
//         dispatch({
//           type: UPDATE_PRODUCTS,
//           products: indexedProducts,
//         });
//       });
//     }
//   }, [products, data, loading, dispatch, id]);
//   const addToCart = () => {
//     const itemInCart = cart.find((cartItem) => cartItem._id === id);
//     if (itemInCart) {
//       dispatch({
//         type: UPDATE_CART_QUANTITY,
//         _id: id,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
//       });
//       idbPromise('cart', 'put', {
//         ...itemInCart,
//         purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
//       });
//     } else {
//       dispatch({
//         type: ADD_TO_CART,
//         product: { ...currentProduct, purchaseQuantity: 1 },
//       });
//       idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
//     }
//   };

//   const removeFromCart = () => {
//     dispatch({
//       type: REMOVE_FROM_CART,
//       _id: currentProduct._id,
//     });

//     idbPromise('cart', 'delete', { ...currentProduct });
//   };
//   return (
//     <>
//       {currentProduct && cart ? (
//         <div className="container my-1">
//           <Link to="/">← Back to Products</Link>

//           <h2>{currentProduct.name}</h2>

//           <p>{currentProduct.description}</p>

//           <p>
//             <strong>Price:</strong>${currentProduct.price}{' '}
//             <button onClick={addToCart}>Add to Cart</button>
//             <button
//               disabled={!cart.find((p) => p._id === currentProduct._id)}
//               onClick={removeFromCart}
//             >
//               Remove from Cart
//             </button>
//           </p>

//           <img
//             src={`/images/${currentProduct.image}`}
//             alt={currentProduct.name}
//           />
//         </div>
//       ) : null}
//       {loading ? <img src={spinner} alt="loading" /> : null}
//       <Cart />
//     </>
//   );
// }
// < =============== stevens code  End ===================== >







const Product = () => {
  const { id } = useParams();

  // Fetch data for the specific product using its ID
  const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
    variables: { productId: id }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const product = data?.product || {};

  return (
    <div id="backgroundImageAllProduct">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="display-4 font-weight-bold text-white bg-opaque"id='custom-bg-secondary'>{product.name}</h1>
            <ProductCard product={product} />
            <p className="display-6 font-weight-bold text-white bg-opaque"id='custom-bg-secondary'>{product.short_desc}</p>
            <p className="display-6 font-weight-bold text-white bg-opaque"id='custom-bg-secondary'>{product.long_desc}</p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
