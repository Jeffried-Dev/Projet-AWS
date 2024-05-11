import IUser from "./user"

export default interface Ientreprise extends IUser{
    logo?: string | null
    description?: string
}