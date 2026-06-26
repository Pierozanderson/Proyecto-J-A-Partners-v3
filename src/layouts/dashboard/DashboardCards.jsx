import { getLeads } from "@/crm/crmStorage";

function DashboardCards() {

    const leads = getLeads();

    const nuevos = leads.filter(
        lead => lead.estado === "Nuevo"
    ).length;

    return (

        <div className="grid md:grid-cols-4 gap-6 mb-8">

            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-gray-500">
                    Total Leads
                </h3>

                <p className="text-3xl font-bold">
                    {leads.length}
                </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-gray-500">
                    Nuevos
                </h3>

                <p className="text-3xl font-bold">
                    {nuevos}
                </p>
            </div>

        </div>

    );

}

export default DashboardCards;