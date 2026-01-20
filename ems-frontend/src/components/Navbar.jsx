import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold text-lg">EMS</h1>

      <div className="flex gap-4 items-center">
        {user.role === "OWNER" && (
          <>
            <Link to="/owner/dashboard">Dashboard</Link>
            <Link to="/attendance/list">Attendance</Link>
            <Link to="/leave/approvals">Leave</Link>
          </>
        )}

        {user.role === "TEAM_LEAD" && (
          <>
            <Link to="/attendance/list">Attendance</Link>
            <Link to="/leave/approvals">Leave</Link>
          </>
        )}

        {user.role === "EMPLOYEE" && (
          <>
            <Link to="/employee/dashboard">Dashboard</Link>
            <Link to="/attendance">Attendance</Link>
            <Link to="/leave/apply">Apply Leave</Link>
          </>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
