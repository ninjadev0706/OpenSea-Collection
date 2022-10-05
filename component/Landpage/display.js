import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import {
    Box,
    Image,
    Stat,
    StatNumber,
    StatHelpText,
    SimpleGrid,
} from "@chakra-ui/react";

/**
 * get Collection data with nextCursor 
 */
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

    console.log(collectiondata)

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
                    collectiondata && collectiondata.map((item, i) => {
                        if (i == 0 || i == 1)
                            return
                        return item && (
                            <Box w='100%' h='100%' p={5} border='1px' borderColor='gray.400' borderRadius="10px" key={i} textAlign="center" >
                                <Image src={item.image_url} _hover={{ transform: "scale(1.03)", }} transition={"0.2s ease-in-out"} alt='Dan Abramov' textAlign="center" />
                                <Stat>
                                    <StatNumber>{item?.token_id}</StatNumber>
                                    <StatHelpText>owner: {item?.owner?.user?.username}</StatHelpText>
                                </Stat>
                            </Box>
                        );
                    })
                }
            </SimpleGrid>
        </InfiniteScroll>

    );
}
