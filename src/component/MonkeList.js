import React from "react";
import  {Stack }from '@mui/material';
import Monkes from './Monkes';
import Monke1 from '../images/GenZ Monke.png';
import Monke2 from '../images/GenZ Monke(2).png';
import Monke3 from '../images/GenZ Monke(3).png';


export default function MonkeList(props) {
    const monkes = [{monke: Monke1, title : "Gen Z Monke", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"},
  {monke: Monke2,  title : "Gen Z Monke", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"}
  ,{ monke: Monke3, title : "Gen Z Monke", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"}];

  const compmonke = monkes.map(monkey=>{
    return<Monkes title={monkey.title} monke={monkey.monke} key={monkey.monke} description={monkey.description} />;
  })
 return (
         <Stack direction="row" spacing={2}>
         {compmonke}
</Stack>
 )
}