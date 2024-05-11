import Ioffres from "./offres"
import Iutilisateur from "./utilisateur"

export default interface Ipostulers{
    id?: string |null
    createdDate?: Date | null
    cv?: string | null
    state?: boolean | false
    decision?: boolean | false
    utilisateur?: Iutilisateur | null
    offre?: Ioffres | null
}