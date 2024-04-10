import Ioffres from "./offres"

export default interface Iadresse{
    id?: any | null
    rue?: string| null
    numero?: number | null
    ville?: string | null
    offres?: Ioffres[] | null
}