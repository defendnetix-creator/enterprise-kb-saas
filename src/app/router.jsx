import { Routes, Route } from "react-router-dom";

import LoginPage from "../features/auth/LoginPage";
import AdminDashboard from "../features/admin/AdminDashboard";
import ArticlesManagement from "../features/admin/ArticlesManagement";
import CategoriesPage from "../features/admin/CategoriesPage";
import UserDashboard from "../features/user/UserDashboard";
import UserManagement from "../features/admin/UserManagement";

import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Routes>

      {/* Public Route */}
      <Route path="/" element={<LoginPage />} />

      {/* ================= ADMIN ROUTES ================= */}

      {/* Admin Dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Admin Articles */}
      <Route
        path="/admin/articles"
        element={
          <ProtectedRoute allowedRole="admin">
            <ArticlesManagement />
          </ProtectedRoute>
        }
      />

      {/* Admin Categories */}
      <Route
        path="/admin/categories"
        element={
          <ProtectedRoute allowedRole="admin">
            <CategoriesPage />
          </ProtectedRoute>
        }
      />

      {/* ================= EMPLOYEE ROUTES ================= */}

      <Route
        path="/user/dashboard"
        element={
          <ProtectedRoute allowedRole="employee">
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
  path="/admin/users"
  element={
    <ProtectedRoute allowedRole="admin">
      <UserManagement />
    </ProtectedRoute>
  }
/>

    </Routes>
  );
}

export default AppRouter;
