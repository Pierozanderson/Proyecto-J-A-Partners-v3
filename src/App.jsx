import "./App.css";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./hooks/LanguageContext";
import { SkipLink } from "./components/responsives/SkipLink";
import { CRMProvider } from "./hooks/CRMContext";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <LanguageProvider>
          <CRMProvider>
            <SkipLink />

            <Suspense fallback={<div>Cargando...</div>}>

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                </Routes>

            </Suspense>
</CRMProvider>
        </LanguageProvider>
    );
}

export default App;