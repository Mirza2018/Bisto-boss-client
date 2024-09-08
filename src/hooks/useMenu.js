import { useQuery } from "@tanstack/react-query";

const useMenu = (cat) => {
 

    const { data: menu = [], isLoading: loadding ,refetch} = useQuery({
        queryKey: [""],
        queryFn: async () => {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
            return res.json();
        }
    })



    return [menu, loadding,refetch]
}
export default useMenu;