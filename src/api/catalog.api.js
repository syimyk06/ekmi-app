import axios from "axios"

export const getCatalog = async () => {
	const resp = await axios('https://jsonplaceholder.typicode.com/photos')
	return resp.data
}