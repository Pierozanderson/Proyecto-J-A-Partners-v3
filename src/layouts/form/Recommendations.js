export function recommendService(data) {

    const service = data.service?.toLowerCase() || ""

    if (service.includes("ia") || service.includes("ai")) {
        return {
            package: "Growth AI",
            description:
                "Automatización inteligente, asistentes virtuales y análisis avanzado."
        }
    }

    if (service.includes("web")) {
        return {
            package: "MVP Launch",
            description:
                "Desarrollo web escalable para validar y acelerar tu negocio."
        }
    }

    if (service.includes("automation")) {
        return {
            package: "Process Automation",
            description:
                "Automatización de tareas repetitivas e integración de sistemas."
        }
    }

    return {
        package: "Consultoría Estratégica",
        description:
            "Evaluación personalizada para identificar la mejor solución."
    }
}