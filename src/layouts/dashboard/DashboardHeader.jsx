import logo from "@/assets/images/logo.png";

function DashboardHeader() {

    const today = new Date();

    const date = today.toLocaleDateString("es-PE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (

        <header className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center mb-8">

            <div className="flex items-center gap-4">

                <img
                    src={logo}
                    alt="J&A Partners"
                    className="w-14 h-14 object-contain"
                />

                <div>

                    <h1 className="text-3xl font-bold text-slate-800">

                        CRM J&A Partners

                    </h1>

                    <p className="text-gray-500">

                        Gestión Comercial y Seguimiento de Leads

                    </p>

                </div>

            </div>

            <div className="text-right">

                <h2 className="font-semibold">

                    Administrador

                </h2>

                <p className="text-gray-500 text-sm capitalize">

                    {date}

                </p>

            </div>

        </header>

    );

}

export default DashboardHeader;