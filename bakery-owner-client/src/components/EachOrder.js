import React from 'react'
const EachOrder = ({username , phoneNo, totalAmt}) => {
    // const change=()=>{
    //     console.log(ind);
    //     changeStat(ind);
    // }
    return (
        <div className="eachOrder">
            <p> Username: {username} </p>
            <p> Phone No:  {phoneNo} </p>
            <p> Total Amt: {totalAmt} </p>
            {/* <p> Index: {ind} </p> */}
            {/* <p> {items} </p> */}
            {/* <button type ="button"
            //  onClick={changeStatus(order._id,order.status)}
            onClick={()=>{
                changeStat(ind);
            }}
            >
            {buttonVal} </button> */}

        </div>
    )
}

export default EachOrder
