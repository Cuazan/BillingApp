import { Routes, Route } from "react-router-dom";
import { Layout, Inventory, Employees } from "../Pages"

export function PrivateRoutes() {
    return (
        <Routes>
            <Route path="/main" element={<Layout />}>
                <Route path="inventory" element={<Inventory />} />
                <Route path="employees" element={<Employees />} />
            </Route>
        </Routes>
    )
}
