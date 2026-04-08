import FinancialAnalytics from "../components/dashboard/mainDashborad/FinancialAnalytics";
import RecentTransactions from "../components/dashboard/mainDashborad/RecentTransactions";
import StatusCard from "../components/dashboard/mainDashborad/StatusCard";


const MainDashboard = () => {
  return <>
  <StatusCard/>
  <FinancialAnalytics/>
  <RecentTransactions/>
  </>;
};

export default MainDashboard;
