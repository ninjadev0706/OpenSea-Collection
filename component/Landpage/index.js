import React, { useEffect, useState } from "react";
import { useAccount } from 'wagmi'
import { Box, Alert, AlertIcon, AlertTitle, AlertDescription,} from "@chakra-ui/react";

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

  // new NFT number when scroll down
  const perlength = 20;

  useEffect(() => {
    if (accountData) {
      console.log(accountData)
    }
  }, [accountData])

  //run when first loading
  useEffect(() => {
    if (!assets) {
      NextData();
    }
  }, [])

  // function for getting nex NFTs by nextcursor
  const NextData = () => {
    fetchData(nextCursor);
    setLength(length + perlength);
  }

  return (
    <Box px={50} py={10} mx="auto">
      {
        // confirm wallet status
        accountData ?
          <DisplayNFT collectiondata={collectiondata} length={length} NextData={NextData} assets={assets} setNextCursor={setNextCursor} setCollectionData={setCollectionData} />
          :
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Connect your Wallet!</AlertTitle>
            <AlertDescription>Please connect your wallet.Your browser doesn't have the wallet.</AlertDescription>
          </Alert>
      }
    </Box>
  );
}
