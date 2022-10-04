import React, { useState, useEffect } from 'react'

const WALLET_ADDRESS = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D';

export const useNFTCollection = (strin[]) => {
    const [price, setPrice] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${WALLET_ADDRESS}/token_ids=${1}&token_ids=)`, {
                    headers: {
                        "X-API-KEY": ""
                    }
                })
                const res = await response.json()

                console.log("res => ", res)

                if (res) {
                    setPrice(res['centric-cash'].bnb)
                }
            } catch (error) {
                console.error('Unable to fetch price data:', error)
            }
        }
        fetchData()
    }, [setPrice])

    return price
}