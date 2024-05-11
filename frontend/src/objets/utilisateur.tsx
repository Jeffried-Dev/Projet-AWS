import IUser from "./user";

export default interface Iutilisateur extends IUser {
    gender?: string
    nationality?: string
    secondName?: string
    dateNaiss?: Date,
}