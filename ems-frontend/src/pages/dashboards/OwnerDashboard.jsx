import StatCard from "../../components/StatCard";

const OwnerDashboard = () => {
  const stats = [
    { title: "Total Employees", value: 24 },
    { title: "Present Today", value: 18 },
    { title: "Pending Leaves", value: 5 },
    { title: "Monthly Salary Payout", value: "₹4,80,000" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        Owner Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <StatCard
            key={index}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
};

export default OwnerDashboard;
