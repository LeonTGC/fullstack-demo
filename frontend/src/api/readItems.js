const API_URL = 'http://localhost:4000'

export const readItems = async () => {
    let response = await fetch(`${API_URL}/todos/items`)
    let data = response.json()
    return data
}