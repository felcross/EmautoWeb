export default interface UserFB {
    id: string
    nome: string | null
    email: string | null
    imagemUrl?: string | null
    token?:string
    provedor?: string | null
}