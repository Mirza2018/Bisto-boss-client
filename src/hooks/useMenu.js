import { useEffect, useState } from "react"

const useMenu = () => {

    const [menu, setMenu] = useState([])
    const [loadding, setLodding] = useState(true)
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLodding(false)
            })
    }, [])
    return [menu, loadding]
}
export default useMenu;