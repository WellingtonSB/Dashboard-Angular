import {Produtos} from './Produtos';

export class Usuario
{
    public id: number
    public nome: string
    public usuario: string
    public tipoUsuario: string
    public senha: string
    public produto: Produtos[]
}
