import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import AdminDashboard from "../features/admin/AdminDashboard";
import UserDashboard from "../features/user/UserDashboard";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />
    </Routes>
  );
}

export default AppRouter;
