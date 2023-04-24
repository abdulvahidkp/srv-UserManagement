import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSignin from "../pages/admin/AdminSignin";

function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminSignin />} />
    </Routes>
  );
}

export default AdminRouter;