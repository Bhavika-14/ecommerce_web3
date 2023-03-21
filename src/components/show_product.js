import React from "react"
import Product from './product.js'

export default function ShowProducts({title,products}){
    
    if(products){
    return(
        <>
        <div className="container">
        <div className="p-2 m-4 text-center">
            <h1>
                {title}
            </h1>
          </div>
          <div className="container">
              
              <div className="row">
                  <div className="col-3 mb-4">
                {products.map((product,key)=>{
                    
                    return(<Product product={product} />)
                })}
                </div>
            </div>
            </div>
            </div>
            </>
        
    )
            }
    else{
        <h1>
            No products exist
        </h1>
    }
    
}
