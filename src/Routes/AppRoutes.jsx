import { Routes, Route } from "react-router-dom";
import { Login } from "../Login";
import { PrivateRoutes } from "./PrivateRoutes";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<PrivateRoutes/>}/>
    </Routes>
  );
}