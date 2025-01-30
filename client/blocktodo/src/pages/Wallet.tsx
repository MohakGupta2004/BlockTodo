import { MetaMaskInpageProvider } from "@metamask/providers";
declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}
import {Web3} from 'web3'
import ABI from "../../ABI.json"
import { useNavigate } from "react-router-dom";
function Wallet({saveState}:
  {saveState: (state:{web3: Web3, contract: any, address: string})=>void}
) {
  const navigate = useNavigate()
  const wallet = async ()=>{
   try {
    if(window.ethereum){
        const web3 = new Web3(window.ethereum)
        const accounts= await window.ethereum.request({
          method: "eth_requestAccounts"
        })        
        const contractAddress = "0x9c9907E9Baa9C2639362691093fb552f6E8c311C";
        const contract = new web3.eth.Contract(ABI, contractAddress);
        saveState({
          web3: web3,
          contract: contract,
          //@ts-ignore
          account: accounts[0]
        })  
        navigate("/view-all-tasks")
    } else {
        console.log("ERROR in the ethereum")
      }
   } catch (err) {
    console.log(err)    
   } 
  }
  return (
    <div>

      <button onClick={wallet}>
          Connect with metamask
      </button>
    </div>
  )
}

export default Wallet
