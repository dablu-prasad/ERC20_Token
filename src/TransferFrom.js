import SimpleToken from './artifacts/contracts/SimpleToken.sol/SimpleToken.json'
import Home from "./Home";
import { ethers } from "ethers";
import { useState } from 'react';
const TransferFrom=(props)=>{
    //console.log(props.ContractAddress)
    const [sender,upsender]=useState();
    const [recipient,uprecipient]=useState();
    const [value,upvalue]=useState();
    //console.log(acc)
    async function transferfrom1()
    {
        console.log("First")
    await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(props.ContractAddress, SimpleToken.abi, signer);
      console.log(` Before To Account transfer ${sender} ${recipient}and ${value} `)
      const transection=await contract.transferFrom(sender,recipient,value);
      await transection.wait();
      console.log(`After To Account transfer ${sender} ${recipient}and ${value} `)
      clearText()
    }

    function clearText()  
    {
        document.getElementById('i1').value = "";
        document.getElementById('i2').value = "";
        document.getElementById('i3').value = "";
    } 

    return(
        <div>
        <Home/>
  <div className="mb-3">
    <label  className="form-label">Sender:</label>
    <input className="form-control" id="i1" onChange={e=>upsender(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Recipient:</label>
    <input className="form-control" id="i2" onChange={e=>uprecipient(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Amount:</label>
    <input  className="form-control" id="i3" onChange={e=>upvalue(e.target.value)}/>
  </div>
 
  <button className="btn btn-primary" onClick={transferfrom1}>Transfer From</button>
        </div>
    )
}

export default TransferFrom;