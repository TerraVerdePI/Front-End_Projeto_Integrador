import Produto from "./Produto"

export interface Usuario{
    id: number
    nome: string
    usuario: string
    senha: string
    foto: string,
    data_nascimento: string,
    cpf: string,
    cnpj: string,
    cep: string,
    endereco: string,
    status_eco: string,
    produto?: Produto[] | null //linha adicionada para que o usuário possa ter uma postagem vinculada

}

export default Usuario;