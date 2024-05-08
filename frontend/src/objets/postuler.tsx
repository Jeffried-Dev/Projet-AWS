import Ioffres from "./offres"
import IUser from "./user"

export default interface Ipostulers{
    id?: string |null
    createdDate?: Date | null
    cv?: string | null
    state?: boolean | false
    decision?: boolean | false
    utilisateur?: IUser | null
    offre?: Ioffres | null
}