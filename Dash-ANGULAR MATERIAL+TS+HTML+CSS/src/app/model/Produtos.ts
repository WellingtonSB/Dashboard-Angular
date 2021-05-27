import { Usuario } from "./Usuario"
import { Categorias } from "./Categorias"

export class Produtos 
{
    public id :number
    public nome: string
    public quantidade: number
    public peso:number
    public preco:number
    public imagem:string
    public descricao: String
    public usuario: Usuario
    public categorias: Categorias
}