import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 1000
});

export async function GetProducts() {
    try {
        const response = await axiosInstance.get(
            '/products'
        );
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export async function PostItem({name}) {
    try {
        axiosInstance.post('/products/add',{
            title: name,
            category: 'trying',
        } ).then(response => {
            console.log(response.data);
        })
    } catch (error) {
        console.error(error);
    }
}