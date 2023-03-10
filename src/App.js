import React,{ useState,useEffect} from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./components/main";
import Clothing from "./components/clothing";
import Electronics from './components/electronics.js'
import {Routes, Route} from "react-router-dom"
import {ethers} from "ethers";
import ShowProducts from "./components/show_product";
import Marketplace from './Marketplace.json'
import SellProducts from "./components/sellProduct";



function App() {
  

const [provider,setProvider]=useState(null)
const [marketplace,setMarketplace]=useState(null)
const [account,setAccount]=useState(null)
const [men_clothes,setMenClothes]=useState(null)
const [women_clothes,setWomenClothes]=useState(null)
const [kids_clothes,setKidsClothes]=useState(null)
const [electronics,setElectronics]=useState(null)
const [total,setTotal]=useState(null)

const address="0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";




const loadBlockchainData=async()=>{
  const provider=new ethers.providers.Web3Provider(window.ethereum)
  setProvider(provider)
  const network= await provider.getNetwork()
  console.log(network)
  const marketplace=new ethers.Contract(address,Marketplace,provider)
  console.log(marketplace)
  setMarketplace(marketplace)
  const total= await marketplace.getTotal()
  const count=Number(total)
  setTotal(count)
  console.log(total)
  
  
  
  const items=[]
  
  
  for(let i=1;i<=total;i++){
    const item=await marketplace.products(i)
    items.push(item)
  }

  console.log(total)

  const men_clothes=items.filter((item)=>item.category===men_clothes)
  const women_clothes=items.filter((item)=>item.category===women_clothes)
  const kids_clothes=items.filter((item)=>item.category===kids_clothes)
  const electronics=items.filter((item)=>item.category===electronics)

  setMenClothes(men_clothes)
  setWomenClothes(women_clothes)
  setKidsClothes(kids_clothes)
  setElectronics(electronics)


}

useEffect(()=>{
  loadBlockchainData()
},[])
  return (
    <>
      <Navbar  account={account} setAccount={setAccount} marketplace={marketplace} />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/clothing/*" element={<Clothing  men_clothes={men_clothes} women_clothes={women_clothes} kids_clothes={kids_clothes} />} />
        <Route path="/electronics" element={<Electronics electronics={electronics} />} />
        <Route path="/sellProduct" element={<SellProducts electronics={electronics} />} />

      </Routes>
      <Footer />
    </>
  
  );
}

export default App;
