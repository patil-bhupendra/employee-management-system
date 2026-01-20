import StatCard from "../../components/StatCard";

const LeadDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        Team Lead Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatCard title="Team Members" value={6} />
        <StatCard title="Pending Approvals" value={2} />
      </div>
    </div>
  );
};

export default LeadDashboard;
