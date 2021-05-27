import { Produtos } from "./Produtos"

export class Categorias{
    public id : number
    public nome:string
    public descricao:string
    public imagem: string
    public produtos:Produtos[]
}