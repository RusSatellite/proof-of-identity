import React from 'react';

import image from '../../assets/logo2.png'

const Footer = () => {
  return (
    <div className='container mt-4'>
      <h1 className='proof-identify-bold'>Join the Proof of Identity network and start minting the Global Income Coin</h1>
      <div className=' list-scrollbar'>
        <table className='table fs-1p25 text-center'>
          <tbody>
            <tr style={{ backgroundColor: "#BEC0BF" }} className="proof-identify-bold ">
              <td></td>
              <td>Free subscription</td>
              <td className='bordertop borderleft borderright'>Supporter</td>
              <td className='bordertop borderleftdouble borderright'>Founder contributor</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Cost</td>
              <td>Free</td>
              <td className=' borderleft borderrightdouble'>20 €</td>
              <td className='borderright borderleftdouble'>500 €</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Signature Daily Minting<sub>[1]</sub></td>
              <td className='text-center position-relative'><span className='position-absolute' style={{ left: "5px" }}>1x</span><img src={image} alt="" width={40} style={{ margin: "1px" }} /></td>
              <td className='borderright borderleft text-center position-relative'><span className='position-absolute' style={{ left: "5px" }}>2x</span><img src={image} alt="" width={40} style={{ margin: "1px" }} /><img src={image} alt="" width={40} style={{ margin: "1px" }} /></td>
              <td className='borderright borderleftdouble text-center position-relative'><span className='position-absolute' style={{ left: "5px" }}>3x</span><img src={image} alt="" width={40} style={{ margin: "1px" }} /><img src={image} alt="" width={40} style={{ margin: "1px" }} /><img src={image} alt="" width={40} style={{ margin: "1px" }} /></td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Node Rewards (up to 2x the daily minting)<sub>[2]</sub></td>
              <td>Only signature</td>
              <td className='borderright borderleft'>Signature + 1 node </td>
              <td className='borderright borderleftdouble'>Signature + 10 nodes</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Total maximum rewards up to:</td>
              <td className='text-center position-relative'><span className='position-absolute' style={{ left: "5px" }}>1x</span><img src={image} alt="" width={30} style={{ margin: "1px" }} /></td>
              <td className='borderright borderleft text-center position-relative'><span className='position-absolute' style={{ left: "5px" }}>4x</span><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /></td>
              <td className='borderright borderleftdouble text-center position-relative'><span className='position-absolute' style={{ left: "5px" }}>23x</span><img src={image} alt="" width={30} style={{ margin: "1px" }} className="opacity-0" /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><br /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><br /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><br /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><img src={image} alt="" width={30} style={{ margin: "1px" }} /><br /></td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Wallet mode<sub>[3]</sub></td>
              <td>Locked until phase 2</td>
              <td className='borderright borderleft'>Locked until phase 1 </td>
              <td className='borderright borderleftdouble'>Unlocked at earliest</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Master verifier<sub>[4]</sub></td>
              <td>No</td>
              <td className='borderright borderleft'> No </td>
              <td className='borderright borderleftdouble'>Yes</td>
            </tr>
            <tr>
              <td style={{ backgroundColor: "#DCDCDC" }} className="proof-identify-bold text-start">Identification<sub>[5]</sub></td>
              <td>0.5 (below parity)</td>
              <td className='borderright borderleft borderbottom'>1 (At parity) </td>
              <td className='borderright borderleftdouble borderbottom'>3 (high identification rate)</td>
            </tr>
            <tr >
              <td className='border-0'></td>
              <td className='border-0'><button className='btn btn-app-primary py-2' style={{minHeight: "4.1rem"}} onClick={() => window.open("/profile", "_parent")} >Join for free</button></td>
              <td className='border-0'><button className='btn btn-app-dark-gray py-2 position-relative'  style={{minHeight: "4.1rem"}}><div className=''></div>Become a supporter</button></td>
              <td className='border-0'><button className='btn btn-app-black py-2 position-relative' style={{minHeight: "4.1rem"}}><div className=''></div>Become a founder contributor</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <span className='mt-4 proof-identify-normal'>[1]: When you join the Proof of Identity network, you are uniquely assigned with a wallet and a signature. Your signature is automatically assigned to a node that will take part on the blocks validation process on your behalf and so you will receive Global Income Coins in your wallet without any other action required form your side. Supporters and Founder Contributors receive high amount of rewards for the first 365 days, then their daily global income is set at the unit.</span>
      <br /><br />
      <span className='mt-4 proof-identify-normal'>[2]: Supporters and funder contributors are offered the opportunity to run a node (or 10). This only requires them to download or software of the nodes on their desktop, and be connected to the internet for a few minutes every day. A node operating at its full capacity receives rewards equal to the double daily minting of a signature. For example: a supporter operating a node receives double daily minting + node rewards = 4x the daily minting received by free subscriber</span>
    </div>
  );
};

export default Footer;
