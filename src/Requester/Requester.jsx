import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://recursosbackend-gagdguh4a2aehrfs.canadacentral-01.azurewebsites.net',
    timeout: 5000
});

export async function GetProducts() {
    try {
        const response = await axiosInstance.get(
            '/api/Products'
        );
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function PostItem({ id, name, category, stock, price, provider }) {
    try {
        const response = await axiosInstance.post('/api/Products', {
            id: id,
            name:name,
            categoryId: category,
            stock:stock,
            price: price,
            providerId: provider
        });
        console.log(id, name);
        console.log(response.data);
    } catch (error) {
        console.error('Error al hacer POST:', error);
    }
}


export async function GetEmployees() {
    try {
        const response = await axiosInstance.get(
            '/api/Employees'
        );
        return response.data

    } catch (error) {
        console.log(error)
    }
}