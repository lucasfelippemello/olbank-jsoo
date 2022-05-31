import {Cliente} from "./Cliente.js";
import { Diretor } from "./Funcionário/Diretor.js";
import { Gerente } from "./Funcionário/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Lucas", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Mantorras", 5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Jano", 789045612300, 789);
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "789")

console.log(gerenteEstaLogado, diretorEstaLogado);
console.log(clienteEstaLogado);


