import React, { useState, useEffect, useCallback } from 'react'

const useNFTCollection = () => {
    const [assets, setAssets] = useState(null)
    const handleData = useCallback(
        async(nextcursor) => {
            if(!nextcursor) {
                return;
            }
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'X-API-KEY': "7825c4057b6044719021ed683c40ddf9",
                        
                    }
                };
                const response = await fetch(`https://api.opensea.io/api/v1/assets/?cursor=${nextcursor}&order_direction=desc&limit=20&include_orders=false&asset_contract_addresses=0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D`, options)
    
                const res = await response.json() 
    
                if (res) {
                    setAssets(res)
                }
    
                return assets;
            } catch (error) {
                console.error('Unable to fetch price data:', error)
            }
        }
    )

    return {fetchData: handleData, assets};
} 

export default useNFTCollection