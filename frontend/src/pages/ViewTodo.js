import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../api/getItem"

const ViewTodo = () => {
    const [item, setItem] = useState('')
    const { id } = useParams()

    useEffect(() => {
        const fetchItem = async () => {
            let data = await getItem(id)
            setItem(data)
        }
        fetchItem()
    }, [])
    return (
        <div>
            <h1>view todo</h1>
            <p>{item.text}</p>
        </div>
    )
}
export default ViewTodo