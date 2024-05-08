import Ioffres from "./offres"
import Iville from "./ville"

export default interface Iadresse{
    id?: any | null
    rue?: string| null
    numero?: number | null
    ville?: Iville | null
}