import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    Box,
    Image,
    Stat,
    StatNumber,
    StatHelpText,
    SimpleGrid
} from "@chakra-ui/react";

export default function DisplayNFT(props) {

    const { NextData, length, assets, setNextCursor, collectiondata } = props;

    useEffect(() => {
        if (assets) {
            setNextCursor(assets.next);

            const nextArr = Object.values(assets)[2];
            nextArr.map((item) => {
                collectiondata.push(item);
            })
        }
    }, [assets])

    return (
        <InfiniteScroll
            dataLength={length}
            next={NextData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <SimpleGrid minChildWidth='270px' spacing='40px'>
                {
                    collectiondata && collectiondata.map((e, i) => {
                        if (i == 0 || i == 1)
                            return
                        return (
                            <Box w='100%' h='100%' p={5} border='1px' borderColor='gray.400' key={i} textAlign="center" >
                                <Image src={e.image_url} _hover={{ transform: "scale(1.03)", }} transition={"0.2s ease-in-out"} alt='Dan Abramov' textAlign="center" />
                                <p>{e.token_id}</p>
                                <Stat>
                                    <StatNumber>£0.00</StatNumber>
                                    <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                                </Stat>
                            </Box>
                        );
                    })
                }
            </SimpleGrid>
        </InfiniteScroll>
    );
}
