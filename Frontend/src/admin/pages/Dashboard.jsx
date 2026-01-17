// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   BarChart3,
//   Users,
//   CarFront,
//   DollarSign,
//   Activity,
//   LineChart,
//   PieChart,
//   TrendingUp,
// } from "lucide-react";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import { Bar, Line, Doughnut } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     totalRides: 0,
//     activeDrivers: 0,
//     totalRevenue: 0,
//     completedRides: 0,
//     upcomingRides: 0,
//     avgRating: 0,
//   });

//   /* -------------------- Charts Data -------------------- */

//   const rideTrendsData = {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     datasets: [
//       {
//         label: "Completed Rides",
//         data: [320, 410, 385, 520, 480, 610, 580],
//         borderColor: "rgb(99,102,241)",
//         backgroundColor: "rgba(99,102,241,0.3)",
//         tension: 0.4,
//         fill: true,
//       },
//       {
//         label: "Cancelled Rides",
//         data: [45, 38, 52, 28, 41, 35, 42],
//         borderColor: "rgb(239,68,68)",
//         backgroundColor: "rgba(239,68,68,0.1)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const revenueData = {
//     labels: ["Taxi", "Auto", "Bike", "Cab"],
//     datasets: [
//       {
//         data: [45, 25, 20, 10],
//         backgroundColor: [
//           "rgba(99,102,241,0.8)",
//           "rgba(34,197,94,0.8)",
//           "rgba(251,191,36,0.8)",
//           "rgba(236,72,153,0.8)",
//         ],
//         borderWidth: 2,
//       },
//     ],
//   };

//   const driverActivityData = {
//     labels: ["Online", "Busy", "Offline", "Break"],
//     datasets: [
//       {
//         data: [156, 89, 234, 67],
//         backgroundColor: [
//           "rgba(34,197,94,0.8)",
//           "rgba(251,191,36,0.8)",
//           "rgba(156,163,175,0.8)",
//           "rgba(99,102,241,0.8)",
//         ],
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: { usePointStyle: true },
//       },
//     },
//     scales: {
//       y: { beginAtZero: true },
//     },
//   };

//   /* -------------------- Animated Counters -------------------- */

//   useEffect(() => {
//     const targetStats = {
//       totalRides: 1245,
//       activeDrivers: 156,
//       totalRevenue: 45678,
//       completedRides: 1180,
//       upcomingRides: 23,
//       avgRating: 4.7,
//     };

//     const intervals = Object.keys(targetStats).map((key) =>
//       setInterval(() => {
//         setStats((prev) => {
//           const target = targetStats[key];
//           const current = prev[key];

//           if (current >= target) return prev;

//           const increment =
//             typeof target === "number" && target > 10
//               ? Math.ceil((target - current) / 15)
//               : 0.1;

//           return {
//             ...prev,
//             [key]:
//               typeof target === "number"
//                 ? Math.min(current + increment, target)
//                 : target,
//           };
//         });
//       }, 30)
//     );

//     return () => intervals.forEach(clearInterval);
//   }, []);

//   /* -------------------- Animations -------------------- */

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.08 },
//     },
//   };

//   const cardVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//     hover: { scale: 1.03 },
//   };

//   /* -------------------- JSX -------------------- */

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
//       <h1 className="text-4xl font-black text-indigo-600 mb-8">
//         RideHub Dashboard
//       </h1>

//       {/* Stats */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
//       >
//         {[
//           {
//             title: "Total Rides",
//             value: stats.totalRides.toLocaleString(),
//             icon: CarFront,
//           },
//           {
//             title: "Active Drivers",
//             value: stats.activeDrivers,
//             icon: Users,
//           },
//           {
//             title: "Revenue",
//             value: `₹${stats.totalRevenue.toLocaleString()}`,
//             icon: DollarSign,
//           },
//         ].map(({ title, value, icon: Icon }) => (
//           <motion.div
//             key={title}
//             variants={cardVariants}
//             whileHover="hover"
//             className="bg-white rounded-xl shadow-lg p-6"
//           >
//             <Icon className="w-8 h-8 text-indigo-600 mb-3" />
//             <p className="text-gray-500">{title}</p>
//             <h2 className="text-3xl font-bold">{value}</h2>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white p-6 rounded-xl shadow">
//           <Line data={rideTrendsData} options={chartOptions} />
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <Doughnut data={revenueData} />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import { Image, FolderKanban, Users, MessageSquare } from "lucide-react";

const stats = [
  { label: "Banners", value: "5", icon: <Image /> },
  { label: "Projects", value: "100+", icon: <FolderKanban /> },
  { label: "Clients", value: "50+", icon: <Users /> },
  { label: "Contact Queries", value: "12", icon: <MessageSquare /> },
];

const DashboardHome = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-xl shadow p-6 flex items-center gap-4"
          >
            <div className="p-3 bg-red-100 text-red-600 rounded-lg">
              {s.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{s.label}</p>
              <p className="text-2xl font-bold">{s.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
