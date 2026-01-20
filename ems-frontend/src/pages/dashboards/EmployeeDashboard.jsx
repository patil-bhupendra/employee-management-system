import { Link } from "react-router-dom";

const EmployeeDashboard = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Employee Dashboard</h1>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Attendance This Month</h3>
          <p style={styles.cardValue}>20 Days</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Salary This Month</h3>
          <p style={styles.cardValue}>₹35,000</p>
        </div>
      </div>

      <Link to="/attendance">
        <button style={styles.button}>Mark Attendance</button>
      </Link>
    </div>
  );
};

const styles = {
  page: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "25px",
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
  },
  card: {
    background: "#f9fafb",
    padding: "20px",
    borderRadius: "10px",
    minWidth: "220px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  },
  cardTitle: {
    marginBottom: "10px",
    color: "#555",
  },
  cardValue: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  button: {
    padding: "12px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
  },
};

export default EmployeeDashboard;
