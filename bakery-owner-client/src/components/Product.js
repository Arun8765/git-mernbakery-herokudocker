import React from 'react'

import { Link } from 'react-router-dom';
import axios from 'axios';
const Product = ({name,price ,imageurl,ind}) => {
    const Delete =()=>{
        axios({
            url: '/api/deleteProduct',
            method: 'POST',
            data: {ind}
        })
        .then(()=>{
            console.log(`Data has been sent to the server`)
        })
        .catch((err)=>{
            console.log(`Internal server error:`,err)
        });
        window.location.reload(false);
    }




    return (
        <div className="eachProduct" >
            <img src={imageurl} alt="Item" />
            <p id="productName">{name}</p>
            <p id="productPrice">₹ {price}.00</p>
            <div className="editAndDelete">
            <Link to={{
                pathname:"/editProd",
                state: {
                    name: name,
                    price: price,
                    imageurl: imageurl,
                    ind: ind
                }
            }}>
            <button id="edit" type= "button">Edit</button>
            </Link>            
            <button className="deleteButton" onClick={Delete}>Delete</button>

            </div>
        </div>
    )
}

export default Product
