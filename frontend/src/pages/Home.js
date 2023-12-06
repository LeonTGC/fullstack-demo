import { useState, useEffect } from 'react'
import { readItems } from '../api/readItems'

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

    if(!items) return <h1>loading...</h1>
    return (
        <div>
            <h1>home</h1>
            {items.map((item, index) => {
                return <p key={item._id}>{item.text}</p>
            })}
        </div>
    )
}
export default Home