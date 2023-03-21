import React,{useState} from "react"
import {ethers} from "ethers"

export default function Product({product}){
    console.log(product)
    return(
        <>
            <div class="card">
                <img src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">{product.description}</p>
                  <h6 class="card-text">{ethers.utils.formatUnits(product.price.toString(),'ether')} ETH</h6>
                  {product.stock &&
                  <p className="card-text" style={{color:"green"}}>In Stock</p>
                  }
                  {!product.stock &&
                  <p className="card-text" style={{color:"red"}}>Out of Stock</p>
                  }
                </div>
                <button className="btn btn-dark m-2 mb-4">Buy</button>
            </div>
        
        
        </>
    )
}