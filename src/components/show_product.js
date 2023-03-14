import React from "react"
import Product from './product.js'

export default function ShowProducts({products}){
    return(
        <div className="container">
            <div className="row">
                {products.map((key,product)=>{
                    return(<Product product={product} />)
                })}

            </div>

        </div>
    )
}
