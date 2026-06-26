import { createContext, useContext, useEffect, useState } from "react";
import { getLeads } from "@/crm/crmStorage";

const CRMContext = createContext();

export function CRMProvider({ children }) {

    const [leads, setLeads] = useState([]);

    const refreshLeads = () => {
        setLeads(getLeads());
    };

    useEffect(() => {
        refreshLeads();
    }, []);

    return (

        <CRMContext.Provider
            value={{
                leads,
                refreshLeads
            }}
        >

            {children}

        </CRMContext.Provider>

    );

}

export function useCRM() {
    return useContext(CRMContext);
}