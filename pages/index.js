import { useState } from 'react'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

import SantaGame from '../artifacts/contracts/SantaGame.sol/SantaGame.json';

const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

export default function mint() {
  const [formInput, updateFormInput] = useState({ addresses: '' })
  const router = useRouter()

  async function initMint() {
    const { addresses } = formInput

    if (!addresses) {
      alert('Field must not be empty');
      return
    }
    
    try {
     doMinting(addresses);
    } catch (error) {
      console.log(error)
    }  
  }

  async function doMinting(addresses='') {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()

    let rawAddrs = addresses.split(',');
    let addrs=[];

    rawAddrs.map ((elem) => {
         addrs.push(elem.trim())
    })
    
    try {
         const sac = new ethers.Contract(contractAddress, SantaGame.abi, signer);
     
         const mint = await sac.mintForMany(addrs);
     
         const tx = mint.wait();
     
         console.log(await tx);
         alert('Minting successful')

    } catch (error) {
         console.error(error)
    }
     
    

    // router.push('/')
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12 pt-8">

        <textarea 
          rows="12"
          className="mt-8 border rounded p-4" 
          placeholder="Commer seperated addresses, example: 0x15BDBe44F88A17eB4391535854f29406e3Cf0efd, 0x1A3C70C95e50953f0940468Ea5876f007AC1C428, 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
          onChange={e => updateFormInput({ ...formInput, addresses: e.target.value })}></textarea>
        
        <button onClick={initMint} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Mint
        </button>
      </div>
    </div>
  )
}