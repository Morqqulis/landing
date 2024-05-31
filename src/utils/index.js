import axios from 'axios'

export const getProducts = async () => {
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        return data
    } catch (error) {
        console.log('Error fetching products:', error)
    }
}

export const getWeather = async (city = 'Baku') => {
    const API_KEY = '54b1407dcc4d3ca0d88eefdeca4dd8a4'
    try {
        const { data } = await axios.get(
            // eslint-disable-next-line no-undef
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        return data
    } catch (error) {
        console.log('Error fetching weather:', error)
    }
}

export const getUsers = async () => {
    try {
        const { data } = await axios.get('http://dummyjson.com/users')
        return data
    } catch (error) {
        console.log('Error fetching users:', error)
    }
}

export const getRecipes = async () => {
    try {
        const { data } = await axios.get('https://dummyjson.com/recipes?sortBy=name&order=asc')
        return data
    } catch (error) {
        console.log('Error fetching posts:', error)
    }
}

export const getTodos = async () => {
    try {
        const { data } = await axios.get('https://dummyjson.com/todos')
        return data
    } catch (error) {
        console.log('Error fetching todos:', error)
    }
}
