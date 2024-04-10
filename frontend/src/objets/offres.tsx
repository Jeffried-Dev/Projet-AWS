import { ListFormat } from "typescript"
import Iadresse from "./adresse"
import Ientreprise from "./entreprise"
import Ipostulers from "./postuler"

export default interface Ioffres{
    id?: number | null
    name? : string | null
    description?: string | null
    adresse?: Iadresse | null
    typeOffre?: string | null
    duree?: string | null
    entreprise?: Ientreprise | null
    postulers?: Ipostulers[] | null
   // offre?: Ioffres | null
}