import { Routes, Route } from "react-router-dom";
import { Login } from "../Login";
import { PrivateRoutes } from "./PrivateRoutes";
import { CashRegister } from "../CashRegister";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<PrivateRoutes />} />
      <Route path="box" element={<CashRegister />} />
    </Routes>
  );
}