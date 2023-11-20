import axios from 'axios'
import React, { useState } from 'react'

const Product = () => {
  const[Products, setProducts]=useState([]);
  axios.get('https://achyut.acetechnepal.com/products/')
   .then((res)=> {
    console.log(res.data);
    setProducts(res.data);
   })
  return (
    <div className=' ml-48 '>
      <table>
        <thead>
          <th>productname</th>
          <th>price</th>
          <th>description</th>
          <th>category</th>


        </thead>

        <tbody>
          {Products.map(item =>(
           <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>{item.categoryn }</td>
           </tr>

          ))}
           
        </tbody>
        </table>
    </div>
  )
}

export default Product