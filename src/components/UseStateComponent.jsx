import { useState } from "react";

export default function UseStateComponent(){
    const[products,setProduct]=  useState(["TV ","Mobile "," Shoe"]);
    return(
        <div className="container">
            <ol>
                {
                    products.map(product=>
                        <li key={product}>{product}</li>
                    )
                }
            </ol>
         </div>
    )
}