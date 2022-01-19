import SimpleToken from './artifacts/contracts/SimpleToken.sol/SimpleToken.json'
import { ethers } from 'ethers';
import {useState} from 'react';
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Menu from './Menu';
import Transfer from './Transfer'
import Allowance from './Allowance';
import TransferFrom from './TransferFrom';
import Approve from './Approve';
 function App() {
  const ContractAddress='0xc6ad4628f000AF45Df9E088DC3C18C3E68875fF1' 

  const [name,setname]=useState();
  const [symbol,setsymbol]=useState();
  const[account,setaccount]=useState();
  const[balance,setbalance]=useState();
 
    async function getAddress()
    {
      const [account]= await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(ContractAddress, SimpleToken.abi, signer);
      const balance= await contract.balanceOf(account)
     // console.log(account)
     // console.log(contract)
      const TokenSynbol=await contract.symbol()
      const TokenName=await contract.name()
    //  console.log(TokenName)
      //console.log(TokenSynbol)
      setname(TokenName)
      setsymbol(TokenSynbol)
      setaccount(account)
      setbalance(balance.toString())
    }
    
    getAddress();
  
  return (
    <>
    <Router>
      <div className="App">
      <Navbar account={account} balance={balance} symbol={symbol} name={name}/>
        <Routes>
        <Route exact path="/" element={<Menu/>}/>
          <Route exact path="/transfer" element={<Transfer ContractAddress={ContractAddress}/>} />
          <Route exact path="/transferfrom" element={<TransferFrom ContractAddress={ContractAddress}/>} />
          <Route exact path="/allowance" element={<Allowance ContractAddress={ContractAddress}/>} />
          <Route exact path="/approve" element={<Approve ContractAddress={ContractAddress}/>} />
        </Routes>
      </div>
    </Router>
     </>
  );
}

export default App;
