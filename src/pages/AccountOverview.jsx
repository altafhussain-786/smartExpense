import BalanceOverviewCard from "../components/dashboard/accountOverview/BalanceOverviewCard";
import AccountCard from "../components/dashboard/accountOverview/AccountCard";
import RecentAccountTransactions from "../components/dashboard/accountOverview/RecentAccountTransactions";

const AccountOverview = () => {
  return <>
    <BalanceOverviewCard/>
    <AccountCard/>
    <RecentAccountTransactions/>
  </>;
};

export default AccountOverview;
