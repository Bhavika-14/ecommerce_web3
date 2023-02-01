import React from "react";
import {Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
import MenClothes from "./menclothes"
import WomenClothes from "./womenclothes"
import KidsClothes from "./kidsclothes"

export default function Clothing(){
    return(
        <>
          <div className="container">
            <ul class="nav nav-tabs justify-content-center m-4">
              <Link to={"/clothing/Men"}>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Men</a>
              </li>
              </Link>
              <Link to={"/clothing/Women"}>
              <li class="nav-item">
                <a class="nav-link" href="#">Women</a>
              </li>
              </Link>
              <Link to={"/clothing/Kids"}>
              <li class="nav-item">
                <a class="nav-link" href="#">Kids</a>
              </li>
              </Link>
              
            </ul>
            <Routes>
                <Route exact path="/clothing/Men" element={<MenClothes />} />
                <Route exact path="/clothing/Men" element={<WomenClothes />} />
                <Route exact path="/clothing/Men" element={<KidsClothes />} />
            </Routes>
            

          </div>

          
        </>
    )
}