import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"

const useMenu = () => {

    // const [menu, setMenu] = useState([])
    // const [loadding, setLodding] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLodding(false)
    //         })
    // }, [])
    const { data: menu = [], isLoading: loadding ,refetch} = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/menu');
            return res.json();
        }
    })



    return [menu, loadding,refetch]
}
export default useMenu;