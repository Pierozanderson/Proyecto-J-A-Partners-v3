export function classifyOpportunity(data) {
    let score = 0

    if (data.budget === "50k+") score += 3
    else if (data.budget) score += 1

    if (
        data.stage?.toLowerCase().includes("growth") ||
        data.stage?.toLowerCase().includes("crecimiento")
    ) {
        score += 2
    }

    if (
        data.service?.toLowerCase().includes("ai") ||
        data.service?.toLowerCase().includes("ia")
    ) {
        score += 2
    }

    if (score >= 6) return "Alta"
    if (score >= 3) return "Media"

    return "Baja"
}