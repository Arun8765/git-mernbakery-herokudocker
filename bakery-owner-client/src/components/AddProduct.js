import React from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom';
class AddProduct extends React.Component {
 
    state={
        productName: '',
        price: '',
        imageurl: ''
    };

    handleChange = ({target})=>{
        const {name, value} = target
        this.setState({ [name]: value });
    };

    submit =(e) =>{
        e.preventDefault();
        // if(this.state.imageurl ==='')
        // this.setState({imageurl: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFrZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'})

       
        const payload={
            name : this.state.productName,
            price: this.state.price,
            imageurl: this.state.imageurl   
        };

        console.log(payload.imageurl)
        if (payload.imageurl === "")
        payload.imageurl='https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmFrZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'

        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
        .then(()=>{
            console.log(`Data has been sent to the server`)
            this.resetInputs();

        })
        .catch((err)=>{
            console.log(`Internal server error:`,err)
        });
    }

    resetInputs=()=>{
        alert("The Product was added!!!")
        this.setState({
            productName: '',
            price: '',
            imageurl: ''
        })
    }

    render(){

        console.log('State:',this.state)

    return (
        <div className="addproduct">
            <form onSubmit={this.submit}>
            <div className="form-input" >
            <label htmlFor="pname">Product Name:</label> <input type="text"
            name="productName" 
            id="pname"
            value={this.state.productName}
            onChange={this.handleChange} 
            autoFocus="on"
            /></div>     
            <div className="form-input" > <label htmlFor="price">Product Price:</label> 
            <input  
            type="number" 
            min="0" 
            id="price" 
            name="price"
            value={this.state.price}
            onChange={this.handleChange} 
            // autoFocus="on"
            /> </div>
            <div className="form-input" >
            <label htmlFor="imageurl">Image url:</label> <input 
            type="text" 
            name="imageurl" 
            id="imageurl" 
            placeholder="http://"
            // onClick="this.select();"
            value={this.state.imageurl}
            onChange={this.handleChange}
            /></div>
            <button type="submit" > Add the product</button>
            </form>           
        </div>
        // <div>
        //     <h1>Hello AddProduct</h1>
        // </div>
    )
    }
}

export default AddProduct
