import { useActionState, useState } from "react"
import { useLanguage } from "@/hooks/LanguageContext.jsx"
import FormContact from "@/layouts/form/FormContact"
import FormFields from "@/layouts/form/FormFields"
import { validate } from "@/layouts/form/FormValidation"
import ProspectSummary from "@/layouts/form/ProspectSummary"
import { classifyOpportunity } from "@/layouts/form/LeadScoring"
import { recommendService } from "@/layouts/form/Recommendations"

function Form() {
    const { t } = useLanguage()
    const [loadTime] = useState(() => Date.now())
    const [prospectData, setProspectData] = useState(null)
const [step, setStep] = useState("form")
    const SERVICE_OPTIONS = t.form.options.service
    const STAGE_OPTIONS = t.form.options.stage
    const BUDGET_OPTIONS = t.form.options.budget

    async function handleFormSubmit(_prevState, formData) {
        const error = validate(formData, t.form.validation)
        if (error) {
            if (error.ok && !error.message) return { ok: true, message: "", fields: {} }
            return { ok: false, message: error.message, fields: error.fields || {} }
        }

        const payload = {
            fullName: formData.get("fullName")?.toString().trim(),
            email: formData.get("email")?.toString().trim(),
            company: formData.get("company")?.toString().trim(),
            phone: formData.get("phone")?.toString().trim(),
            service: formData.get("service")?.toString(),
            stage: formData.get("stage")?.toString(),
            budget: formData.get("budget")?.toString() || "",
            challenge: formData.get("challenge")?.toString().trim(),
            submittedAt: new Date().toISOString(),
        }
        const opportunity = classifyOpportunity(payload)

const recommendation = recommendService(payload)

setProspectData({
    ...payload,
    opportunity,
    recommendation,
})
setStep("summary")

        const endpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim()

        if (endpoint) {
            try {
                const res = await fetch(endpoint, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify(payload),
                })
                if (!res.ok) return { ok: false, message: t.form.validation.submitError }
            } catch {
                return { ok: false, message: t.form.validation.connectionError }
            }
        } else if (import.meta.env.DEV) {
            console.log("[Diagnóstico]", payload)
        }

        return { ok: true, message: t.form.success }
    }

    const [state, formAction] = useActionState(handleFormSubmit, { ok: null, message: "", fields: {} })

    const showSuccess = state.ok === true && state.message !== ""

    return (
        <section
            id="form-section"
            className="bg-gray-800 flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 p-4 sm:p-8 md:p-12 lg:p-20 text-white"
            aria-label={t.form.heading}
        >
            <FormContact />

           {step === "form" && (
    <FormFields
        formAction={formAction}
        state={state}
        formI18n={t.form}
        serviceOptions={SERVICE_OPTIONS}
        stageOptions={STAGE_OPTIONS}
        budgetOptions={BUDGET_OPTIONS}
        loadTime={loadTime}
    />
)}

{step === "summary" && prospectData && (
    <div className="w-full lg:w-1/2">
        <ProspectSummary data={prospectData} />

        <div className="flex gap-4 mt-6">
            <button
                type="button"
                onClick={() => setStep("form")}
                className="px-6 py-3 bg-gray-700 rounded-lg"
            >
                Volver
            </button>

            <button
                type="button"
                onClick={() => setStep("success")}
                className="px-6 py-3 bg-cyan-600 rounded-lg"
            >
                Continuar
            </button>
        </div>
    </div>
)}

{step === "success" && (
    <div
        className="bg-gray-900 w-full lg:w-1/2 p-8 rounded-2xl text-center"
    >
        <h2 className="text-3xl font-bold text-emerald-400 mb-4">
            ¡Gracias por contactarnos!
        </h2>

        <p className="text-gray-300">
            Hemos recibido tu información correctamente.
        </p>

        <p className="text-gray-300 mt-4">
            Nuestro equipo revisará tu solicitud y se pondrá en contacto
            contigo en un plazo aproximado de 24 a 48 horas hábiles.
        </p>

        <button
            type="button"
            onClick={() => {
                setProspectData(null)
                setStep("form")
            }}
            className="mt-8 px-6 py-3 bg-cyan-600 rounded-lg"
        >
            Enviar otra solicitud
        </button>
    </div>
)}
        </section>
    )
}

export default Form
