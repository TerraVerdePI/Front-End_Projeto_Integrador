import Produto from "./Produto";

interface Categoria{
    id: number;
    descricao: string;
    produto?: Produto[] | null
}

export default Categoria;