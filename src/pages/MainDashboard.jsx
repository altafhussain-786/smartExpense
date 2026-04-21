import FinancialAnalytics from "../components/dashboard/mainDashboard/FinancialAnalytics";
import RecentTransactions from "../components/dashboard/mainDashboard/RecentTransactions";
import StatusCard from "../components/dashboard/mainDashboard/StatusCard";

const MainDashboard = () => {
  return <>
    <StatusCard />
    <FinancialAnalytics />
    <RecentTransactions />
  </>;
};

export default MainDashboard;
