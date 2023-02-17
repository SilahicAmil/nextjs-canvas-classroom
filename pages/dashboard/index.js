import DashboadFooter from "@/components/Dashboard/DashboardFooter";
import Dashboard from "@/components/Dashboard/Dashboard";
import Head from "next/head";

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>Scholar - Dashboard</title>
      </Head>
      <div className="w-full h-full">
        <Dashboard />
        <DashboadFooter />
      </div>
    </>
  );
};

export default DashboardPage;
