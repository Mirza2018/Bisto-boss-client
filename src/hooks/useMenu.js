import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"

const useMenu = () => {

    // const [menu, setMenu] = useState([])
    // const [loadding, setLodding] = useState(true)
    // useEffect(() => {
    //     fetch('https://bisto-boss-server.onrender.com/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLodding(false)
    //         })
    // }, [])
    const { data: menu = [], isLoading: loadding ,refetch} = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await fetch('https://bisto-boss-server.onrender.com/menu');
            return res.json();
        }
    })



    return [menu, loadding,refetch]
}
export default useMenu;