import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

//used to get data from a SPECIFIC product/agent/whatever
export const QueryID = (postID) => {
    const {data, isLoading} = useQuery({
        queryFn: async() => {
            const {data} = await axios.get(
                `https://www.boredapi.com/api/activity?participants=${postID}`
            )
            return data
            //use as data.product.id
        },
    })

    return { data, isLoading }
}

//used to get data from a ALL product/agent/whatever
export const QueryAll = () => {
    const {data, isLoading} = useQuery({
        queryFn: async() => {
            const {data} = await axios.get(
                `insert url here`
            )
            return data
            //use as data.product.id
        },
    })

    return { data, isLoading }
}