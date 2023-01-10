
export interface Encounter {
    patient_id: number
    notes: string
    visit_code: string
    provider: string
    billing_code: string
    icd10: string
    total_cost: number
    copay: number
    chief_complaint: string
    pulse: number
    systolic: number
    diastolic: number
}