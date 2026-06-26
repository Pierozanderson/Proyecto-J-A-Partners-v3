import { useCRM } from "@/hooks/CRMContext";

function DashboardStats() {

    const { leads } = useCRM();

    const total = leads.length;

    const nuevos = leads.filter(
        lead => lead.estado === "Nuevo"
    ).length;

    const contactados = leads.filter(
        lead => lead.estado === "Contactado"
    ).length;

    const ganados = leads.filter(
        lead => lead.estado === "Ganado"
    ).length;

    const cards = [

        {
            title: "Total Leads",
            value: total,
            color: "border-cyan-500"
        },

        {
            title: "Nuevos",
            value: nuevos,
            color: "border-blue-500"
        },

        {
            title: "Contactados",
            value: contactados,
            color: "border-amber-500"
        },

        {
            title: "Ganados",
            value: ganados,
            color: "border-emerald-500"
        }

    ];

    return (

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

            {

                cards.map(card => (

                    <div
                        key={card.title}
                        className={`bg-white rounded-2xl shadow-md p-6 border-l-8 ${card.color}`}
                    >

                        <p className="text-gray-500">

                            {card.title}

                        </p>

                        <h2 className="text-4xl font-bold mt-2">

                            {card.value}

                        </h2>

                    </div>

                ))

            }

        </section>

    );

}

export default DashboardStats;