import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import AdminDashboard from "../features/admin/AdminDashboard";
import UserDashboard from "../features/user/UserDashboard";
import ArticlesManagement from "../features/admin/ArticlesManagement";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Routes>

      {/* Public Route */}
      <Route path="/" element={<LoginPage />} />

      {/* Admin Dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin Articles Management */}
      <Route
        path="/admin/articles"
        element={
          <ProtectedRoute allowedRole="admin">
            <ArticlesManagement />
          </ProtectedRoute>
        }
      />

      {/* Employee Dashboard */}
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
