import { Trash2, Eye } from "lucide-react";
import { deleteLead } from "@/crm/crmStorage";
import { useCRM } from "@/hooks/CRMContext";

function LeadsTable({ search }) {
    const { leads, refreshLeads } = useCRM();

    const statusColors = {
        Nuevo: "bg-blue-100 text-blue-700",
        Contactado: "bg-yellow-100 text-yellow-700",
        Reunión: "bg-purple-100 text-purple-700",
        Propuesta: "bg-orange-100 text-orange-700",
        Ganado: "bg-green-100 text-green-700",
        Perdido: "bg-red-100 text-red-700",
    };

    const filteredLeads = leads.filter((lead) => {
        const text = search.toLowerCase();

        return (
            lead.fullName.toLowerCase().includes(text) ||
            lead.company.toLowerCase().includes(text) ||
            lead.email.toLowerCase().includes(text)
        );
    });

    function handleDelete(id) {
        if (!window.confirm("¿Eliminar este Lead?")) return;

        deleteLead(id);
        refreshLeads();
    }

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full">
                <thead className="bg-slate-100">
                    <tr>
                        <th className="text-left p-4">Código</th>
                        <th className="text-left">Cliente</th>
                        <th className="text-left">Empresa</th>
                        <th className="text-left">Servicio</th>
                        <th className="text-left">Estado</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredLeads.length === 0 ? (
                        <tr>
                            <td
                                colSpan="6"
                                className="text-center py-12 text-gray-400"
                            >
                                No existen Leads.
                            </td>
                        </tr>
                    ) : (
                        filteredLeads.map((lead) => (
                            <tr
                                key={lead.id}
                                className="border-t hover:bg-slate-50 transition"
                            >
                                <td className="p-4 font-semibold">
                                    {lead.codigo}
                                </td>

                                <td>{lead.fullName}</td>
                                <td>{lead.company}</td>
                                <td>{lead.service}</td>

                                <td>
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            statusColors[lead.estado] ||
                                            "bg-gray-100 text-gray-700"
                                        }`}
                                    >
                                        {lead.estado}
                                    </span>
                                </td>

                                <td className="text-center">
                                    <div className="flex justify-center gap-3">
                                        <button className="text-cyan-600 hover:text-cyan-800 transition">
                                            <Eye size={18} />
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleDelete(lead.id)
                                            }
                                            className="text-red-500 hover:text-red-700 transition"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default LeadsTable;