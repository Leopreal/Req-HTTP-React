import { useState, useEffect } from "react";

// 4 - costom hooks

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fechtData = async () => {
         
       const res = await fetch(url)

        const json = await res.json()

        setData(json)
        }

        fechtData()
    }, [url])
    
    return {data}
}