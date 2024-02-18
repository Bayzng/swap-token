import { FaArrowDown } from "react-icons/fa";
import "./Swap.css";
import Web3 from "web3";
import { useState, useEffect } from "react";
import { shortenAddress } from "../utils/shortenAddress";
import { ethers, providers } from "ethers";
import Navbar from "../Navbar/Navbar";
// import { ethers, providers } from "ethers";

const Swap = () => {
  
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [swapContract, setSwapContract] = useState(null);
  const [dltTokenContract, setDltTokenContract] = useState(null);

  useEffect(() => {

    const initializeWeb3 = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {

          await window.ethereum.request({ method: "eth_requestAccounts" });
          setWeb3(web3);
        } catch (error) {
          console.error("User denied account access");
        }
      }

      else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        setWeb3(web3);
      }

      else {
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
      }
    };

    initializeWeb3();
  }, []);


  useEffect(() => {
    // Function to initialize the smart contracts
    const initializeContracts = async () => {
      if (web3) {
        // Get the network ID
        const networkId = await web3.eth.net.getId();

        // Initialize the SwapTokenContract instance
        const swapContractABI = SwapTokenContract.abi;
        const swapContractAddress = SwapTokenContract.networks[networkId].address;
        const swapContractInstance = new web3.eth.Contract(swapContractABI, swapContractAddress);
        setSwapContract(swapContractInstance);

        // Initialize the Token2Contract instance
        const dltATokenABI = DLTAToken.abi;
        const dltATokenABIAddress = DLTAToken.networks[networkId].address;
        const dltATokenInstance = new web3.eth.Contract(dltATokenABI, dltATokenABIAddress);
        setDltTokenContract(dltATokenInstance);
      }
    };

    initializeContracts();
  }, [web3]);

  useEffect(() => {

    const fetchAccountDetails = async () => {
      if (web3) {

        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);


          const balance = await web3.eth.getBalance(accounts[0]);

          const balanceInEther = web3.utils.fromWei(balance, "ether");
          setBalance(balanceInEther);
        }
      }
    };

    fetchAccountDetails();
  }, [web3]);

  const handleSwap = async () => {
    if (web3 && swapContract && dltTokenContract) {
      try {
        // await swapContract.methods.swapExactInputSingle(100).send({ from: account });

        await dltTokenContract.methods.transfer(TO_ADDRESS, AMOUNT).send({ from: account });

        console.log("Swap or transfer successful");
      } catch (error) {
        console.error("Error swapping or transferring tokens:", error);
      }
    }
  };

  return (
    <>
      {/* <Navbar/> */}
      <div className="--swap">
        <h1 className="--swap-headerOne">
          Swap anytime, <br /> anywhere.
        </h1>

        <div className="--swap-page">
          <div style={{marginTop: '15px', marginBottom: '20px'}}>
            <h3 style={{marginBottom: '10px', color: "rgb(128, 0, 124)"}}>Wallet Address:</h3>
            {account && (
              <p style={{marginBottom: '10px'}}>
                <strong>{shortenAddress(account)}</strong>
              </p>
              )}
              <h3 style={{marginBottom: '10px', color: "rgb(128, 0, 124)"}}>Balance:</h3>
              <p><strong>{balance} ETH</strong></p>
          </div>
          <div className="--swap-page-one">
            <h1 style={{ marginLeft: "10px", paddingTop: "10px" }}>You Pay</h1>
            <section className="--swap-section-one">
              <input type="number" placeholder="0" />
              <select>
                <option value="dltToken">DLT TOKEN</option>
              </select>
            </section>
            <p className="--swap-amount">$....</p>
          </div>

          <h1 className="--flex">
            <FaArrowDown size={25} style={{ marginLeft: "17px" }} />
          </h1>

          <div className="--swap-page-two">
            <h1 style={{ marginLeft: "10px", paddingTop: "10px" }}>
              You Receive
            </h1>
            <section className="--swap-section-two">
              <input type="number" placeholder="0" />
              <select className="--swap-select-token">
                <option value="dltToken">Select token</option>
                <option value="dltToken">USDT</option>
                <option value="dltToken">USDC</option>
              </select>
            </section>
            <p className="--swap-amount">$....</p>
          </div>
        </div>

        <div id="background-wrap">
          <div className="bubble x1"></div>
          <div className="bubble x2"></div>
          <div className="bubble x3"></div>
          <div className="bubble x4"></div>
          <div className="bubble x5"></div>
          <div className="bubble x6"></div>
          <div className="bubble x7"></div>
          <div className="bubble x8"></div>
          <div className="bubble x9"></div>
          <div className="bubble x10"></div>
        </div>
      </div>
    </>
  );
};

export default Swap;
