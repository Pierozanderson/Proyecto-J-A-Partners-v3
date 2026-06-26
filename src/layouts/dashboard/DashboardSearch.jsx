function DashboardSearch({ search, setSearch }) {

    return (

        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

            <input
                type="text"
                placeholder="Buscar por nombre, empresa o correo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
            />

        </div>

    );

}

export default DashboardSearch;