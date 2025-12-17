import { useState } from "react";
export default function UseStateComponent(){
    const{products,setProduct}= useState(["TV","Mobile","Shoe"]);
    return(
        <div className="container">
            <ol>
                {
                    products.map(products=>
                        <li key={products}>{products}</li>
                    )
                }
            </ol>
        </div>
    )
}