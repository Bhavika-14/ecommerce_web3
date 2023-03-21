import React from "react";
import Product from "./product"
import ShowProducts from "./show_product";

export default function Electronics({electronics}){
    return(
        <>
        <ShowProducts title ={"Electronics"} products={electronics} />
        </>
    )
}