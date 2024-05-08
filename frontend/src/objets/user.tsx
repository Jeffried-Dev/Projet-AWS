export default interface IUser {
    id?: any | null,
    username?: string | null,
    name?: string | null,
    mail?: string,
    password?: string,
    role?: string
    tel?: number| null
    image?: string | null,
    gender?: string| null
    nationality?: string| null
    secondName?: string| null
    dateNaiss?: Date| null,
    verification?: boolean | false
    actived?: boolean | false
    activationKey?: string | null
    resetKey?: string | null
    token?: string | null
  }