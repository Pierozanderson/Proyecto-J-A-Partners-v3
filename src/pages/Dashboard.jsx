import { useState } from "react";

import DashboardHeader from "@/layouts/dashboard/DashboardHeader";
import DashboardStats from "@/layouts/dashboard/DashboardStats";
import DashboardToolbar from "@/layouts/dashboard/DashboardToolbar";
import LeadsTable from "@/layouts/dashboard/LeadsTable";

function Dashboard() {

    const [search, setSearch] = useState("");

    return (

        <main className="min-h-screen bg-slate-100 p-8">

            <DashboardHeader />

            <DashboardStats />

            <DashboardToolbar


                search={search}

                setSearch={setSearch}

            />

            <LeadsTable

                search={search}

            />

        </main>

    );

}

export default Dashboard;