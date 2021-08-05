import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

const cliente1 = new Cliente("Amanda", 333224455);
const cliente2 = new Cliente("Sandra", 444533367);

const contaCorrenteAmanda = new ContaCorrente(1001, cliente1);
contaCorrenteAmanda.depositar(500);

const contaCorrenteSandra = new ContaCorrente(4320, cliente2);

contaCorrenteAmanda.transferir(200, contaCorrenteSandra);

console.log(contaCorrenteAmanda);
console.log(contaCorrenteSandra);

console.log(ContaCorrente.numeroDeContas);
