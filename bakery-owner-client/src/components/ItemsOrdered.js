import React from 'react'

const ItemsOrdered = ({name,qty,price,totalAmt}) => {
    return (
        <div>
         <p> {name} : {qty} pcs. </p>
        <p>₹ {price}.00 / pcs.</p>
         {/* <p> {qty} </p>
         <p> {price} </p>    */}
        </div>
    )
}

export default ItemsOrdered
