import { Navigate, Route, Routes } from "react-router-dom";
import { Layout, Inventory, Employees } from "../Pages";

export function PrivateRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/employees" element={<Employees />} />
        </Route>
      </Routes>
    </>
  );
}
