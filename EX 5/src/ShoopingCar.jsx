// import {useState} from 'react'
// const ShoopingCar = () => {

// import { useReducer, useState } from "react";

    
//   const [products, setProducts] = useState([]);
//   const [productName, setProductName] = useState('');
//   const [productPrice, setProductPrice] = useState('');

  
//   const handleAddProduct = () => {
//     if (productName.trim() !== '' && productPrice.trim() !== '') {
//       const newProduct = {
//         id: Date.now(), // Unique identifier
//         name: productName.trim(),
//         price: parseFloat(productPrice),
//         quantity: 1,
//       };
      
//       setProducts([...products, newProduct]);
//       setProductName(''); // Clear input fields
//       setProductPrice('');
//     }
//   };

  
//   const increaseQuantity = (id) => {
//     const updatedProducts = products.map((product) =>
//       product.id === id
//         ? { ...product, quantity: product.quantity + 1 }
//         : product
//     );
//     setProducts(updatedProducts);
//   };

  
//   const decreaseQuantity = (id) => {
//     const updatedProducts = products.map((product) =>
//       product.id === id && product.quantity > 1
//         ? { ...product, quantity: product.quantity - 1 }
//         : product
//     );
//     setProducts(updatedProducts);
//   };

  
//   const removeProduct = (id) => {
//     const updatedProducts = products.filter((product) => product.id !== id);
//     setProducts(updatedProducts);
//   };

//   // Calculate total price
//   const totalPrice = products.reduce(
//     (total, product) => total + product.price * product.quantity,
//     0
//   );

//   return (
//     <div>
//       <h2>Simple Shopping Cart</h2>
//       <div>
//         <h3>Add a Product</h3>
//         <input
//           type="text"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           placeholder="Product Name"
//         />
//         <input
//           type="number"
//           min="0"
//           step="0.01"
//           value={productPrice}
//           onChange={(e) => setProductPrice(e.target.value)}
//           placeholder="Price"
//         />
//         <button onClick={handleAddProduct}>Add to Cart</button>
//       </div>

//       {products.length > 0 ? (
//         <div>
//           <h3>Products in Cart</h3>
//           <ul>
//             {products.map((product) => (
//               <li key={product.id}>
//                 <strong>{product.name}</strong> - ${product.price.toFixed(2)}
//                 <div>
//                   Quantity:
//                   <button onClick={() => decreaseQuantity(product.id)}>-</button>
//                   {product.quantity}
//                   <button onClick={() => increaseQuantity(product.id)}>+</button>
//                 </div>
//                 <button onClick={() => removeProduct(product.id)}>Remove</button>
//               </li>
//             ))}
//           </ul>
//           <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
//         </div>
//       ) : (
//         <p>The cart is empty.</p>
//       )}
//     </div>
//   );
// };



// export default ShoopingCar

// import  { useEffect, useState } from "react";

// const GreetingTittle = () => {

// const [Name , setName] = useState("")
// const [Greeting , setGreeting ]= useState("Welcome")

// useEffect(()=>{
//     if(!Name){
//         document.title = ""
//     } else{
//         document.title = '${Greeting} , ${Name}';
//     }
// }, [Name, Greeting])

// }

// return(
//     <div>
//         <h1>Enter your Name</h1>
//         <input type="name" 
//         value={Name}
//          onChange={(event) => setName(event.target.value)}/>

//         <h1>Choose a Greeting</h1>
//         <input type="text"
//         value={Greeting}
//          onChange={(e)=> setGreeting(e.target.value)} />
//     </div>
// )




// export default GreetingTittle
import { useState, useReducer } from "react";



const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return state.count > 0 ? { count: state.count - 1 } : state;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};




const ShoopingCar = () => {

 const [count , setCount] = useState(0)

    return(
        <div>
            <button onClick={() => setCount (count + 1)}>Increment +</button>
            {count}

            <button onClick={()=> setCount(count - 1)}>Decrement -</button>
        </div>
     )

}



export default ShoopingCar;
