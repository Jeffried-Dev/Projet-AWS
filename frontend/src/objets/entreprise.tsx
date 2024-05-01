import Ioffres from "./offres"
import IUser from "./user"

export default interface Ientreprise extends IUser{
    logo?: string | null
    description?: string | null
    offres?: Ioffres[] | null 
}