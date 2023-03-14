import React, {useState} from "react";

export default function SellProducts({marketplace,account}){
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [image,setImage]=useState("")
    const [stock,setStock]=useState(0)
    const [price,setPrice]=useState(0)
    const [category,setCategory]=useState("")

    const onSubmit=async()=>{
      if(account==null){
        alert("Account not connected")
        return
      }
      const transaction = await marketplace.SellProduct(name,description,price,stock,category,image)
      await transaction.wait()
      alert("Product Listed")

    }
    const onHandleChange=(e)=>{
      setCategory(e.target.value)
    }
    return(
        <>  <div className="container col-6">
        
            <form onSubmit={onSubmit}>
              <div class="row mb-3">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="name" onChange={(e)=>setName(e.target.value)} />
                </div>
              </div>
              <div class="row mb-3">
                <label for="description" class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="description" onChange={(e)=>setDescription(e.target.value)} />
                </div>
              </div>
              <div class="row mb-3">
                <label for="image" class="col-sm-2 col-form-label">IPFS Image Address</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="image" onChange={(e)=>setImage(e.target.value)} />
                </div>
              </div>
              <div class="row mb-3">
                <label for="price" class="col-sm-2 col-form-label">Price (in ETH)</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="price" onChange={(e)=>setPrice(e.target.value)} />
                </div>
              </div>
              <div class="row mb-3">
                <label for="stock" class="col-sm-2 col-form-label">Stock</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="stock" onChange={(e)=>setStock(e.target.value)} />
                </div>
              </div>
              <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-2 pt-0">Category</legend>
                <div class="col-sm-10">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="men_clothes" checked={category==="men_clothes"} onChange={onHandleChange} />
                    <label class="form-check-label" for="gridRadios1">
                      Men's Wear
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="women_clothes" checked={category==="women_clothes"} onChange={onHandleChange} />
                    <label class="form-check-label" for="gridRadios2">
                      Women's Wear
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="kids_clothes" checked={category==="kids_clothes"} onChange={onHandleChange} />
                    <label class="form-check-label" for="gridRadios3">
                      Kid's Wear
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="electronics" checked={category==="electronics"} onChange={onHandleChange} />
                    <label class="form-check-label" for="gridRadios4">
                      Electronics
                    </label>
                  </div>
                </div>
              </fieldset>
              
              <button type="submit" class="btn btn-primary">Add Product</button>
        </form>
        
        </div>
        </>
    )
}