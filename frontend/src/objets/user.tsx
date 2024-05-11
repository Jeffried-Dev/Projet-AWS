export default interface IUser {
    id?: any | null,
    name?: string,
    mail?: string,
    password?: string,
    role?: string
    tel?: number
    repeatedpassword?: string
    verification?: boolean | false
    actived?: boolean | false
    activationKey?: string | null
    createdDate?: Date | null
    resetKey?: string | null
    token?: string | null
  }