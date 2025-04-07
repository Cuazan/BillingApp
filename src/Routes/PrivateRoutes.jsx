import { Routes, Route } from "react-router-dom";
import { Layout, Inventory, Employees, Customers } from "../Pages"

export function PrivateRoutes() {
    return (
        <Routes>
            <Route path="/main" element={<Layout />}>
                <Route path="inventory" element={<Inventory />} />
                <Route path="employees" element={<Employees />} />
                <Route path="customers" element={<Customers/>} />
            </Route>
        </Routes>
    )
}
