import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import ItemsOrdered from './ItemsOrdered';
import EachOrder from './EachOrder';
const OutForDelivery = () => {

    const [state, setState] = useState({orders: []})

    const  getProducts=()=>{
        axios.get('/api/outForDel')
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
            status: "Delivered"
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
    
          window.location.reload(false);
    
    }

    const displayProducts=(orders)=>{
        if(!orders.length) return null;
    
        console.log(orders)
    
        
        return orders.map((order,index)=>(
                <li key={index} >
                    <header> <h4>Order id: {order._id}</h4><button id="delever" type="button" onClick={()=>{changeStatus(order._id)}}>Delivered</button> </header>
                <EachOrder username = {order.username} phoneNo={order.phoneNo} totalAmt={order.totalAmt} 
                ind={order._id} buttonVal="Delivered"
                changeStat={changeStatus}
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
        <div className="outfordel">
            <h2>Out for delivery</h2>

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

export default OutForDelivery
