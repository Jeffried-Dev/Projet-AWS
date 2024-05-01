import Iadresse from "./adresse"

export default interface Iville {
    id?: number| null
    name?: string | null
    code?: number |  null
    adresses?: Iadresse[]| null
}