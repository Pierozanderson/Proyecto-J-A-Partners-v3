import { Search, Download, Plus } from "lucide-react";

function DashboardToolbar({ search, setSearch }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6 flex flex-col lg:flex-row justify-between items-center gap-4">

            <div className="relative w-full lg:max-w-md">

                <Search
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Buscar cliente, empresa o correo..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
                />

            </div>

            <div className="flex gap-3">

                <button
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border hover:bg-gray-100 transition"
                >
                    <Download size={18} />
                    Exportar
                </button>

                <button
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-cyan-600 text-white hover:bg-cyan-700 transition"
                >
                    <Plus size={18} />
                    Nuevo Lead
                </button>

            </div>

        </div>
    );
}

export default DashboardToolbar;