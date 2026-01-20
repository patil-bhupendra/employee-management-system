import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";

import OwnerDashboard from "./pages/dashboards/OwnerDashboard";
import EmployeeDashboard from "./pages/dashboards/EmployeeDashboard";

import EmployeeAttendance from "./pages/employee/Attendance";
import AttendanceList from "./pages/attendance/AttendanceList";

import MySalary from "./pages/salary/MySalary";
import CalculateSalary from "./pages/salary/CalculateSalary";

import HolidayList from "./pages/holidays/HolidayList";
import AddHoliday from "./pages/holidays/AddHoliday";

import ProtectedRoute from "./components/ProtectedRoute";
import RoleGuard from "./components/RoleGuard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/owner/dashboard"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["OWNER"]}>
              <OwnerDashboard />
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/dashboard"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["EMPLOYEE"]}>
              <EmployeeDashboard />
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/employee/attendance"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["EMPLOYEE"]}>
              <EmployeeAttendance />
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/attendance/list"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["OWNER", "TEAM_LEAD"]}>
              <AttendanceList />
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/salary"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["EMPLOYEE"]}>
              <MySalary />
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/salary/calculate"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["OWNER"]}>
              <CalculateSalary />
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route
        path="/holidays"
        element={
          <ProtectedRoute>
            <HolidayList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/holidays/add"
        element={
          <ProtectedRoute>
            <RoleGuard allowedRoles={["OWNER"]}>
              <AddHoliday />
            </RoleGuard>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
