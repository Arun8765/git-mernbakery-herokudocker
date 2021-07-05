import React from 'react'
import EachOrder from './EachOrder'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import ItemsOrdered from './ItemsOrdered'
// import OutForDelivery from './OutForDelivery'

const NewOrders = () => {

    const [state, setState] = useState({orders: []})

const  getProducts=()=>{
    axios.get('/api/orders')
    .then((res)=>{
        const data= res.data;
        setState({orders: data});
     })
    .catch((err)=>{
            console.log(err);
    });
}

useEffect(() => {
    getProducts();
},[])

const displayItems =(items)=>{

    
    return items.map((item,index)=>(
            <li key={index}>
                <ItemsOrdered name={item.name} qty={item.qty}
                price={item.price} />
            </li>
        )
     )
     }

const changeStatus=(id)=>{

    console.log("Change stat: ",id)
    const payload={
        id: id,
        status: "out_for_delivery"
    }
    
    axios({
        url: '/api/changeStat',
        method: 'POST',
        data: payload
    })
    .then(()=>{
        console.log(`Data has been updated`);       
    })
    .catch((err)=>{
        console.log(`Internal server error:`,err)
    });

    //   getProducts();
    //   OutForDelivery.getProducts();
    //   OutForDelivery.dispProd();
    //   displayProducts(state.orders);
    window.location.reload(false);

}

const displayProducts=(orders)=>{
    if(!orders.length) return null;

    console.log(orders)

    
    return orders.map((order,index)=>(
            <li key={index} >
            <header> <h4>Order id: {order._id}</h4><button id="outfd" type="button" onClick={()=>{changeStatus(order._id)}}>Out For Delivery</button> </header>
            <EachOrder username = {order.username} phoneNo={order.phoneNo} totalAmt={order.totalAmt} 
            // ind={order._id} 
            // buttonVal="Out For Delivery"
            // changeStat={changeStatus}
            />
            <br/>
            <h4>Products Ordered:</h4>
            <ul>
            {displayItems(order.items)}
            </ul>
            

            
            </li>
            
    ))
}

    return (
        <div className="neworder" >
            <h2>New Orders</h2>

            <ul>
                {displayProducts(state.orders)}
            </ul>

          {/* <ul>
              <li>dsfasfa</li>
              <li>dsfasladkjsvoi rsgfuheiwrhnuchnerth ueithguihtuuwhrtireuigufa</li>
              <li>dsfasfa</li>
              <li>dsfasfa</li>

              <li>dsfasfa</li>

              <li>dsfasfa</li>

              <li>dsfasfa</li>

              <li>dsfasfa</li>

              <li>dsfasfa</li>

              <li>dsfasfa</li>

              <li>dsfasfa</li>

              <li>dsfasfa</li>

              <li>dsfasfa</li>
              <li>dsfasfa</li>
              <li>dsfasfa</li>
              <li>dsfasfa</li>
              <li>dsfasfa</li>
              <li>dsfasfa</li>

          </ul> */}
        </div>
    )
}

export default NewOrders
