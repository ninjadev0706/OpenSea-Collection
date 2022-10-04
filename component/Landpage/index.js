import React, { useEffect, useState } from "react";
import { useAccount } from 'wagmi'
import { Box } from "@chakra-ui/react";

import { useNFTCollection } from '../../hooks/api';
import DisplayNFT from "./display";

export default function Home() {

  const [length, setLength] = useState(20);
  const [nextCursor, setNextCursor] = useState("LXBrPTY3OTQyNTY5Mw==");
  const [collectiondata, setCollectionData] = useState([]);

  const { fetchData, assets } = useNFTCollection();
  const { address, isConnecting, isDisconnected } = useAccount()

  const total_supply = 10000;
  const perlength = 20;

  useEffect(() => {
    if (!assets) {
      NextData();
    }
  }, [])

  const NextData = () => {
    fetchData(nextCursor);
    setLength(length + perlength);
  }

  console.log(address, isConnecting, isDisconnected)

  return (
    <Box px={50} py={10} mx="auto">
      {
        address &&
        <DisplayNFT collectiondata={collectiondata} length={length} NextData={NextData} assets={assets} setNextCursor={setNextCursor} setCollectionData={setCollectionData} />
      }
    </Box>
  );



}
