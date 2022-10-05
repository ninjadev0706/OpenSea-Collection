import React from "react";
import {
    chakra,
    Box,
    useColorModeValue,
    Text,
} from "@chakra-ui/react";

export default function Home() {

    const bgColor = useColorModeValue("blue.200", "blue.500");

    return (
        <Box px={8} py={32} mx="auto">
            <Box
                w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
                mx="auto"
                textAlign={{ base: "left", md: "center" }}
            >
                <chakra.h1
                    mb={6}
                    fontSize={{ base: "4xl", md: "6xl" }}
                    fontWeight="bold"
                    lineHeight="none"
                    letterSpacing={{ base: "normal", md: "tight" }}
                    color={useColorModeValue("gray.900", "gray.100")}
                >
                    Welcome to{" "}
                    <Text
                        display={{ base: "block", lg: "inline" }}
                        w="full"
                        bgClip="text"
                        bgGradient="linear(to-r, green.400,purple.500)"
                        fontWeight="extrabold"
                    >
                        BAYC Collection.
                    </Text>{" "}
                    in one single place.
                </chakra.h1>
                <chakra.p
                    px={{ base: 0, lg: 24 }}
                    mb={6}
                    fontSize={{ base: "lg", md: "xl" }}
                    color={useColorModeValue("gray.600", "gray.300")}
                >
                    Featuring <a href="https://nextjs.org/">Nextjs</a> the react framework
                    for production, <a href="https://chakra-ui.com/">Chakra-ui</a>{" "}
                    optimized for multiple color modes, use light or dark of your choice.{" "}
                    <a href="https://wagmi-xyz.vercel.app/"> & Wagmi </a> wallet
                    connection a react hooks library for Ethereum.
                </chakra.p>

            </Box>
        </Box>
    );
}