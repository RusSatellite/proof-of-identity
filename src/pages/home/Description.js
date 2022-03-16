import React from "react";

import image from '../../assets/Image 4.png';

export default function Description() {

  return (
    <div className="container">
      <div className="row align-items-center proof-identify-normal">
        <div className="col-md-5 text-center"><img src={image} alt="" className="max-w-100percent"/></div>
        <div className="col-md-7"><span style={{textAlign: "justify"}}>Become a minter of the Global Income Coin, receive every day your coins, it is free and takes 2 minutes! <a href="/mainnet/shopplan">Click here</a></span></div>
      
        <div className="col-md-7"><span>Run a node of the network receive up to 4x of daily minting rewards, contribute to the security of the network. <a href="/mainnet/shopplan">Click here</a></span></div>
        <div className="col-md-5 text-center"><img src={image} alt="" className="max-w-100percent" /></div>
      
      <div className="col-md-5 text-center"><img src={image} alt="" className="max-w-100percent" /></div>
        <div className="col-md-7"><span>Become a founder contributor of the Proof of Identity Network, run up to 10 nodes and receive up to 31x of dialy minting rewards, gain the proviledge of Master Verifier status and much more. <a href="/mainnet/shopplan">Click here</a></span></div>
      </div>
    </div>
  );
}
