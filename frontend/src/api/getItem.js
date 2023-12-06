const API_URL = 'http://localhost:4000'

export const getItem = async (id) => {
    let response = await fetch(`${API_URL}/todos/item/${id}`)
    let data = response.json()
    return data
}