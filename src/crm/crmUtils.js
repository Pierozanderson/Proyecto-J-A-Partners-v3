export function generateLeadCode() {
    return "LEAD-" + Date.now();
}

export function getPriority(score) {
    if (score >= 80) return "Alta";
    if (score >= 50) return "Media";
    return "Baja";
}