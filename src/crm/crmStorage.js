const STORAGE_KEY = "ja_partners_leads";

export function getLeads() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function saveLead(lead) {
    const leads = getLeads();

    const newLead = {
        id: Date.now(),
        estado: "Nuevo",
        fechaRegistro: new Date().toLocaleString(),
        ...lead,
    };

    leads.push(newLead);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));

    return newLead;
}

export function updateLead(updatedLead) {
    const leads = getLeads().map((lead) =>
        lead.id === updatedLead.id ? updatedLead : lead
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function deleteLead(id) {
    const leads = getLeads().filter((lead) => lead.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function clearLeads() {
    localStorage.removeItem(STORAGE_KEY);
}