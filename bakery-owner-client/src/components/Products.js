import axios from "axios";
import React from 'react';
import Product from "./Product"
// import {useState} from 'react'
// import { Link } from "react-router-dom"
// import AddProduct from "./AddProduct"
class Products extends React.Component {
    state={
        products:[]
    };

    componentDidMount=()=>{
        this.getProducts();
    }

    getProducts=()=>{
        axios.get('/api')
        .then((res)=>{
            const data= res.data;
            this.setState({products: data});
            // console.log(products);
            console.log('Data has been recieved from mongo!!');
        })
        .catch((err)=>{
                console.log(err);
        });
    }
    // edit=(pname,price,imageurl,ind)=>{
    //     console.log(price)
    // }
    
    displayProducts=(prods)=>{
        if(!prods.length) return null;
        // <ul>
        //     <li><Product key={prods.id} name= {prods.name} imageurl={prods.imageurl} price={prod.price} />
        //     </li> 
        // </ul>
        
        return prods.map((prod,index)=>(
                <li key={index} ><Product name = {prod.name} imageurl={prod.imageurl} price={prod.price} ind={prod._id} />
                </li>
        ))
    }
    render(){
        console.log('State: ',this.state);
    return (
        <div>
          {/* <button onClick="window.location.href='/addnew'">Add Product</button>  */}
          <form action="/addnew" >
              <button type="submit" class="green-button">Add Product</button>
          </form>
            <div className="allProducts">
            {/* <ul>{ this.state.products.map((product) =>{
                <li><Product key={product.id} name= {product.name} imageurl={product.image} price={product.price} /></li>
            }) }</ul>  */}
            <ul>
            {this.displayProducts(this.state.products)}
            </ul>
            {/* <ul>
            <li><Product name="Cake" price="300" imageurl="https://preppykitchen.com/wp-content/uploads/2019/06/Chocolate-cake-recipe-1200a.jpg" /></li>
            <li><Product name="Patties" price="25" imageurl="https://brijwasi-images.s3.ap-south-1.amazonaws.com/snacks/1-aloo-patties.jpg" /></li>
            </ul> */}
        </div>
        </div>
    )
    }
}

export default Products
