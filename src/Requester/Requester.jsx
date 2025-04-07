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
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function GetCategories() {
    try {
        const response = await axiosInstance.get(
            '/api/Categories'
        );
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function GetProviders() {
    try {
        const response = await axiosInstance.get(
            '/api/Providers'
        );
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export async function PostItem({ id, name, category, address, phone, provider }) {
    try {
        const response = await axiosInstance.post('/api/Products', {
            id: id,
            name:name,
            categoryId: category,
            address:address,
            phone: phone,
            providerId: provider
        });
        alert("Succeed! Please refresh the page.");
    } catch (error) {
        console.error('Error al hacer POST:', error);
    }
}


export async function UpdateItem(id, updatedData) {
    try {
        const response = await axiosInstance.put(`api/Products/${id}`, {
            id: id,
            name: updatedData.name,
            categoryId: updatedData.category,
            stock: updatedData.stock,
            price: updatedData.price,
            providerId: updatedData.provider
        });
        alert("Succeed! Please refresh the page.");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function DeleteItem(id) {
    try {
        const response = await axiosInstance.delete(`api/Products/${id}`);
        alert("Succeed! Please refresh the page.");
        return response.data;
        
    } catch (error) {
        console.error(error);
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

export async function PostEmployee({ id, name, email, address, phone, role }) {
    try {
        const response = await axiosInstance.post('/api/Employees', {
            id: id,
            name: name,
            email: email,
            address: address,
            phone: phone,
            roleId: role
        });
        alert("Succeed! Please refresh the page.");
    } catch (error) {
        console.error(error);
    }
}

export async function UpdateEmployee(id, updatedData) {
    try {
        const response = await axiosInstance.put(`api/Employees/${id}`, {
            id: id,
            name: updatedData.name,
            email: updatedData.email,
            address: updatedData.address,
            phone: updatedData.phone,
            roleId: updatedData.role
        });
        alert("Succeed! Please refresh the page.");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function DeleteEmployee(id) {
    try {
        const response = await axiosInstance.delete(`api/Employees/${id}`);
        alert("Succeed! Please refresh the page.");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function PostCustomer({ id, name, email, phone }) {
    try {
        const response = await axiosInstance.post('/api/Customers', {
            id: id,
            name: name,
            email: email,
            phone: phone
        });
        alert("Succeed! Please refresh the page.");
    } catch (error) {
        console.error(error);
    }
}

export async function GetCustomers() {
    try {
        const response = await axiosInstance.get(
            '/api/Customers'
        );
        return response.data

    } catch (error) {
        console.log(error)
    }
}

export async function DeleteCustomer(id) {
    try {
        const response = await axiosInstance.delete(`api/Customers/${id}`);
        alert("Succeed! Please refresh the page.");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
