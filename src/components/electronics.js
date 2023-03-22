import React from "react";
import Product from "./product"
import ShowProducts from "./show_product";

export default function Electronics({electronics,marketplace}){
    return(
        <>
        <ShowProducts title ={"Electronics"} products={electronics} marketplace={marketplace} />
        </>
    )
}