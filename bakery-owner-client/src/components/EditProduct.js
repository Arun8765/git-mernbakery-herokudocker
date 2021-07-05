import React from "react";
import { useState } from "react";
// import { Redirect} from "react-router";
import { Link, useHistory} from "react-router-dom";
import axios from 'axios';
// import Products from "./Products";
const EditProduct = (props) =>  {
    const {name,price,imageurl,ind} = props.location.state;
    const history= useHistory();
    // console.log(props.location.state)
    const [stateName,setStateName] = useState({
        name: name
    });
    const [statePrice,setStatePrice] = useState({
        price: price,
    });
    const [stateImage,setStateImage] = useState({
        imageurl: imageurl
    });
    // setState({
    //     name: props.location.state.name,
    //     price: props.location.state.price,
    //     imageurl: props.location.state.imageurl,
    //     ind: props.location.state.ind
    // })
    const handleName = ({target})=>{

        const {name, value} = target;
        // console.log("State: ",state);
        setStateName({ [name] : value });
        console.log(target);
    };

    const handlePrice = ({target})=>{

        const {name, value} = target;
        // console.log("State: ",state);
        setStatePrice({ [name] : value });
        console.log(target);
    };
    const handleImage = ({target})=>{

        const {name, value} = target;
        // console.log("State: ",state);
        setStateImage({ [name] : value });
        console.log(target);
    };
    // console.log(name);

    // const handleChange1=({target})=>{
    //     const {name,value} =target
    //     console.log(target)
    //     // cosole.log(parseInt(value))
    //     setState({[name] : value} )
    // };

    const submit =(e)=>{
        e.preventDefault();
        // if(this.state.imageurl ==='')
        // this.setState({imageurl: "bakery-owner-client\public\android-chrome-512x512.png"})
        
        const payload={
            name : stateName.name,
            price: statePrice.price,
            imageurl: stateImage.imageurl,
            index: ind
        };
        console.log(payload)


        axios({
            url: '/api/editProd',
            method: 'POST',
            data: payload
        })
        .then(()=>{
            console.log(`Data has been updated`);
            // alert("The Update successful!!!")
            // <Redirect to='/products'></Redirect>
           
        })
        .catch((err)=>{
            console.log(`Internal server error:`,err)
        });

        history.push('/products');
    }


    return (
            <div className="editproduct">
            <form onSubmit={submit}>
            <div className="form-input" >
            <label htmlFor="pname">Product Name:</label> <input type="text"
            name="name" 
            id="pname"
            value={stateName.name}
            onChange={handleName} 
            // autoFocus="on"
            /></div>     
            <div className="form-input" > <label htmlFor="price">Product Price:</label> 
            <input  
            type="number" 
            min="0" 
            id="price" 
            name="price"
            value={statePrice.price}
            onChange={handlePrice} 
            // autoFocus="on"
            /> </div>
            <div className="form-input" >
            <label htmlFor="imageurl">Image url:</label> <input 
            type="text" 
            name="imageurl" 
            id="imageurl" 
            // placeholder="http://"
            value={stateImage.imageurl}
            onChange={handleImage}
            /></div>
            {/* <button type="button" onClick={submit}>aisdjfi</button> */}
            <button id="editChanges" type="submit" >Edit Changes</button>

            <Link to="/products" ><button className="cancelButton">Cancel</button></Link>
            </form>            
        </div>


        // <div>
        // {/* <h1>Welcome to edit prod {name} {price} {imageurl} {ind} </h1> */}
        // <h2>Welcome</h2>
        // <p></p>
        // </div>
        
    )
    
}

export default EditProduct

