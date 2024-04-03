export default class GetShelterDetailsUseCaseOutput {
    shelterName: string
    shelterWhatsapp: string
    ShelterMail: string
    ShelterPhone: string
    createdAt: Date
    updatedAt: Date

    constructor(data: Partial<GetShelterDetailsUseCaseOutput>) {
        Object.assign(this, data)

    }

}