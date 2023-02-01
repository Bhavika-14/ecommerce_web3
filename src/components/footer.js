import React from "react";

let currentYear=new Date().getFullYear()
export default function Footer(){
    return(
        <>
          <div className="bg-dark fixed-bottom text-center p-2">
            <p className="text-light">
          © {currentYear}
          </p>

          </div>
        </>
    )
}