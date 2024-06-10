import axios from "axios"

export const getUsers = async () => {
	const resp = await axios('https://jsonplaceholder.typicode.com/users')
	return resp.data
}