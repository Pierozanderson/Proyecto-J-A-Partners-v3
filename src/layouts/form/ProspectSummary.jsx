function ProspectSummary({ data }) {
    const opportunityColor =
        data.opportunity === "Alta"
            ? "bg-green-500/20 text-green-400 border-green-500/30"
            : data.opportunity === "Media"
                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                : "bg-red-500/20 text-red-400 border-red-500/30"

    return (
        <div className="bg-gray-900 w-full p-8 rounded-2xl text-white shadow-xl border border-gray-700">

            {/* Encabezado */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold">
                    Resumen del Prospecto
                </h2>

                <p className="text-gray-400 mt-2">
                    Verifica que la información ingresada sea correcta antes de continuar.
                </p>
            </div>

            {/* Información principal */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-5 text-cyan-400">
                    Información General
                </h3>

                <div className="grid gap-4">

                    <div className="grid grid-cols-[140px_1fr] gap-3">
                        <span className="text-gray-400 font-medium">Nombre</span>
                        <span>{data.fullName}</span>
                    </div>

                    <div className="grid grid-cols-[140px_1fr] gap-3">
                        <span className="text-gray-400 font-medium">Empresa</span>
                        <span>{data.company}</span>
                    </div>

                    <div className="grid grid-cols-[140px_1fr] gap-3">
                        <span className="text-gray-400 font-medium">Email</span>
                        <span className="break-all">{data.email}</span>
                    </div>

                    <div className="grid grid-cols-[140px_1fr] gap-3">
                        <span className="text-gray-400 font-medium">Servicio</span>
                        <span>{data.service}</span>
                    </div>

                    <div className="grid grid-cols-[140px_1fr] gap-3">
                        <span className="text-gray-400 font-medium">Etapa</span>
                        <span>{data.stage}</span>
                    </div>

                    <div className="grid grid-cols-[140px_1fr] gap-3">
                        <span className="text-gray-400 font-medium">Presupuesto</span>
                        <span>{data.budget}</span>
                    </div>

                </div>
            </div>

            {/* Desafío */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mt-6">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                    Desafío Principal
                </h3>

                <p className="text-gray-300 whitespace-pre-wrap wrap-break-words leading-relaxed">
                    {data.challenge}
                </p>
            </div>

            {/* Clasificación */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">
                    Clasificación de Oportunidad
                </h3>

                <div
                    className={`inline-flex items-center px-4 py-2 rounded-full border font-semibold ${opportunityColor}`}
                >
                    {data.opportunity}
                </div>
            </div>

            {/* Recomendación */}
            <div className="mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                    Servicio Recomendado
                </h3>

                <h4 className="text-xl font-bold mb-3">
                    {data.recommendation.package}
                </h4>

                <p className="text-gray-300 leading-relaxed">
                    {data.recommendation.description}
                </p>
            </div>

        </div>
    )
}

export default ProspectSummary