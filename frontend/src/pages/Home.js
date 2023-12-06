import { useState, useEffect } from 'react'
import { readItems } from '../api/readItems'
import { Link } from 'react-router-dom'

const Home = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            let data = await readItems()
            console.log(data)
            setItems(data)
        }
        fetchItems()
    }, [])

    if (!items) return <h1>loading...</h1>
    return (
        <div>
            <h1>home</h1>
            {items.map((item, index) => {
                return (
                    <Link to={`/${item._id}`}>
                        <p key={item._id}>{item.text}</p>
                    </Link>
                )
            })}
        </div>
    )
}
export default Home