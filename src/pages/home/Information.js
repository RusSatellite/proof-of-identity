import React, { useState, useEffect } from "react";
import axios from 'axios'
import ItemSection from './ItemSection'
import image from '../../assets/Image 4.png';
import image1 from '../../assets/logo2.png';

export default function Home() {
  const [numberOfParticipants, setNumberOfParticipants] = useState('-');
  const [numberOfNodes, setNumberOfNodes] = useState('-');
  const [numberOfBlocks, setNumberOfBlocks] = useState('-');
  const [max_circ_supply, set_max_circ_supply] = useState('-');
  const [circ_supply, set_circ_supply] = useState('-');
  const [daily_minting, set_daily_minting] = useState('-');
  const [nodes_reward, set_nodes_reward] = useState('-');

  useEffect(() => {
    axios.get('https://humanincome.org/api/mainnet/wallet-count')
    .then(res => {
      if (res.data.success === true) {
        setNumberOfParticipants(res.data.data);
      } else {
        console.log('api error');
      }
    })
    .catch(e => {
      console.log(e);
    })
    axios.get('https://humanincome.org/api/mainnet/node-count')
    .then(res => {
      if (res.data.success === true) {
        setNumberOfNodes(res.data.data);
      } else {
        console.log('api error');
      }
    })
    .catch(e => {
      console.log(e);
    })
    axios.get('https://humanincome.org/api/mainnet/block-count')
    .then(res => {
      if (res.data.success === true) {
        setNumberOfBlocks(res.data.data);
      } else {
        console.log('api error');
      }
    })
    .catch(e => {
      console.log(e);
    })
    axios.get('https://humanincome.org/api/mainnet/get-tokenomics')
    .then(res => {
      if (res.data.success === true) {
        set_max_circ_supply(res.data.data.max_circ_supply);
        set_circ_supply(res.data.data.circ_supply);
        set_daily_minting(res.data.data.daily_minting);
        set_nodes_reward(res.data.data.nodes_reward);
      } else {
        console.log('api error');
      }
    })
    .catch(e => {
      console.log(e);
    })
  }, [])

  const mainNetData = [
    {
      title: "Number of participants",
      cnt: numberOfParticipants,
      src: image
    },
    {
      title: "Number of nodes",
      cnt: numberOfNodes,
      src: image
    },
    {
      title: "Minted blocks",
      cnt: numberOfBlocks,
      src: image
    }
  ];
  const tokenEconomics = [
    {
      title: "Max circulating supply",
      cnt: max_circ_supply,
      src: image1
    },
    {
      title: "Circulating supply",
      cnt: circ_supply,
      src: image1
    },
    {
      title: "Daily minting",
      cnt: daily_minting,
      src: image1
    },
    {
      title: "Nodes reward",
      cnt: nodes_reward,
      src: image1
    }
  ];

  return (
    <div className="container mt-4">
      <h6 className="proof-identify-bold">Mainnet data:</h6>
      <div className="d-flex row information-data">
        {mainNetData.map((item, idx) => (
          <ItemSection
            key={idx}
            title={item.title}
            cnt={item.cnt}
            src={item.src}
          />
        ))}
      </div>
      <h6 className="proof-identify-bold">Token economics:</h6>
      <div className="d-flex row information-data">
        {tokenEconomics.map((item, idx) => (
          <ItemSection
            key={idx}
            title={item.title}
            cnt={item.cnt}
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
}
