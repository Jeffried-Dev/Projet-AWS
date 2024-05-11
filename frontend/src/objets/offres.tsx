import { ListFormat } from "typescript"
import Iadresse from "./adresse"
import Ientreprise from "./entreprise"
import Ipostulers from "./postuler"

export default interface Ioffres{
    id?: number | null
    name? : string | null
    description?: string | null
    lieuPoste?: string | null
    frequenceSalaire?: string | null
    salaireMin?: string | null
    salaireMax?: string | null
    adresse?: Iadresse | null
    typeOffre?: string | null
    state?: boolean | null
    entreprise?: Ientreprise | null
    createdDate?: Date | null
}