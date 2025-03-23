import { Routes, Route } from "react-router-dom";
import { Login } from "../Login";
import {Layout, Inventory, Employees} from "../Pages"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/employees" element={<Employees />} />
      </Route>
    </Routes>
  );
}