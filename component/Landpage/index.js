import React, { useEffect, useState } from "react";
import { useAccount } from 'wagmi'
import { Box } from "@chakra-ui/react";

import useNFTCollection from '../../hooks/hooks'
import DisplayNFT from "./display";

export default function Home() {

  const [length, setLength] = useState(20);
  const [nextCursor, setNextCursor] = useState("LXBrPTY3OTQyNTY5Mw==");
  const [collectiondata, setCollectionData] = useState([]);

  const { fetchData, assets } = useNFTCollection();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  const perlength = 20;

  useEffect(() => {
    if(accountData) {
      console.log(accountData)
    }
  }, [accountData])

  useEffect(() => {
    if (!assets) {
      NextData();
    }
  }, [])

  const NextData = () => {
    fetchData(nextCursor);
    setLength(length + perlength);
  }

  return (
    <Box px={50} py={10} mx="auto">
      {
        accountData ?
        <DisplayNFT collectiondata={collectiondata} length={length} NextData={NextData} assets={assets} setNextCursor={setNextCursor} setCollectionData={setCollectionData} />
        :
        <>plz connect wallet</>
      }
    </Box>
  );
}
