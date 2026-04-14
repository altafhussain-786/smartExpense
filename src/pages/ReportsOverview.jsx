import ReportsAnalysisSection from "../components/dashboard/reportsOverview/ReportsAnalysisSection";
import ReportsCard from "../components/dashboard/reportsOverview/ReportsCard";
import SpendingBreakdown from "../components/dashboard/reportsOverview/SpendingBreakdown";

const ReportsOverview = () => {
  return <>
    <ReportsCard/>
    <ReportsAnalysisSection/>
    <SpendingBreakdown/>
  </>;
};

export default ReportsOverview;
