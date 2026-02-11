import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import AdminDashboard from "../features/admin/AdminDashboard";
import UserDashboard from "../features/user/UserDashboard";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Routes>

      {/* Public Route */}
      <Route path="/" element={<LoginPage />} />

      {/* Admin Protected */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Employee Protected */}
      <Route
        path="/user/dashboard"
        element={
          <ProtectedRoute allowedRole="employee">
            <UserDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AppRouter;
