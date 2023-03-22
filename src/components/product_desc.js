import React,{useState} from "react"
import {ethers} from "ethers"
export default function Product_desc({product_desc,setToggle}){
    let [stock,setStock]=useState(false)

    const buyHandle=async()=>{
        if(!product_desc.stock){
            setStock(true)
            return
        }
    }
    return(
        <>
          <div className="product">
            <div className="product_description m-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="mt-4">
                            <button className="float-end btn-close" onClick={()=>setToggle(false)}></button>
                        </div>

                    </div>
                    <div className="row"> 
                        <div className="col-6 text-center">
                            <div className="m-5 p-5">
                                <img src={product_desc.image} />

                            </div>


                        </div>
                        <div className="col-6">
                            <div className="m-5 px-5 py-4">
                                {stock && <div class="alert alert-danger" role="alert">Currently, this item is Out of Stock</div>}
                                <h2 className="my-4">{product_desc.name}</h2>
                                <h4 className="mt-2 mb-0">Description</h4>
                                <p className="mb-2 mt-0">{product_desc.description}</p>
                                <h5 className="mt-4">Price:  {ethers.utils.formatUnits(product_desc.price.toString(),'ether')} ETH</h5>
                                
                                {product_desc.stock &&
                                <p className="card-text" style={{color:"green"}}>In Stock</p>
                                }
                                {!product_desc.stock &&
                                <p className="card-text" style={{color:"red"}}>Out of Stock</p>
                                }

                                <button className="btn px-5 btn-lg btn-dark my-2" onClick={buyHandle}>Buy</button>
                                

                            </div>

                        </div>


                    </div>

                </div>

            </div>
          </div>
        </>
    )
}