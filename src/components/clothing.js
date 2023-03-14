import React from "react";
import {Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
import MenClothes from "./menclothes"
import WomenClothes from "./womenclothes"
import KidsClothes from "./kidsclothes"
import ShowProducts from "./show_product";

export default function Clothing({men_clothes,women_clothes,kids_clothes}){
    return(
        <>
          <div className="container">
            <ul class="nav nav-tabs justify-content-center m-4">
              
              <li class="nav-item">
              <Link to="/Men">
                <button class="nav-link active" aria-current="page">Men</button>
                </Link>
              </li>
              
              <Link to="/clothing/Women">
              <li class="nav-item">
                <a class="nav-link">Women</a>
              </li>
              </Link>
              <Link to="/clothing/Kids">
              <li class="nav-item">
                <a class="nav-link">Kids</a>
              </li>
              </Link>
              
            </ul>
          </div>
            <Routes>
                <Route exact path="Men" element={<ShowProducts title={"Men's Wear"} products={men_clothes} />} />
                <Route path="/clothing/Women" element={<ShowProducts title={"Women's Wear"} />} />
                <Route path="/clothing/Kids" element={<ShowProducts title={"Kids' wear"} />} />
            </Routes>
            

          

          
        </>
    )
}