import React from "react";

import ItemSection from './ItemSection'
import image from '../../assets/Image 4.png';
import image1 from '../../assets/logo2.png';

export default function Home() {
  const mainNetData = [
    {
      title: "Number of participants",
      cnt: "1756",
      src: image
    },
    {
      title: "Number of nodes",
      cnt: "1756",
      src: image
    },
    {
      title: "Minted blocks",
      cnt: "1756",
      src: image
    }
  ];
  const tokenEconomics = [
    {
      title: "Max circulating supply",
      cnt: "20.000",
      src: image1
    },
    {
      title: "Circulating supply",
      cnt: "20.000",
      src: image1
    },
    {
      title: "Daily minting",
      cnt: "20.000",
      src: image1
    },
    {
      title: "Nodes reward",
      cnt: "20.000",
      src: image1
    }
  ];

  return (
    <div className="container mt-4">
      <h6 className="proof-identify-bold">Mainnet data:</h6>
      <div className="d-flex row information-data">
        {mainNetData.map((item, idx) => (
          <ItemSection
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
            title={item.title}
            cnt={item.cnt}
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
}
