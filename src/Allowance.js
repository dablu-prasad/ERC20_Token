import SimpleToken from './artifacts/contracts/SimpleToken.sol/SimpleToken.json'
import Home from "./Home";
import { ethers } from "ethers";
import { useState } from 'react';
const Allowance=(props)=>{
    //console.log(props.ContractAddress)
    const [acc,upaccount]=useState();
    const [value,upvalue]=useState();
    //console.log(acc)
    async function allowance()
    {
        console.log("First")
    await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(props.ContractAddress, SimpleToken.abi, signer);
      console.log(` Before To Account transfer ${acc} and ${value} `)
      await contract.allowance(acc,value);
      console.log(`After To Account transfer ${acc} and ${value} `)
      clearText()
    }
    function clearText()  
    {
        document.getElementById('i1').value = "";
        document.getElementById('i2').value = "";
    } 

    return(
        <div>
        <Home/>
  <div className="mb-3">
    <label  className="form-label">Owner:</label>
    <input className="form-control" id="i1" onChange={e=>upaccount(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Spender:</label>
    <input  className="form-control" id="i2" onChange={e=>upvalue(e.target.value)}/>
  </div>
 
  <button className="btn btn-primary" onClick={allowance}>Allowance</button>
        </div>
    )
}

export default Allowance;