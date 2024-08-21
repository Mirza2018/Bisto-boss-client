import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"

const useMenu = () => {


    const { data: menu = [], isLoading: loadding ,refetch} = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await fetch('https://bisto-boss-server-mirza2018s-projects.vercel.app/menu');
            return res.json();
        }
    })



    return [menu, loadding,refetch]
}
export default useMenu;