import { Cliente } from './Cliente.js'

export class ContaCorrente {
  // atributo estatico (se alterar em algum lugar, em todos os outros vao ser alterados)
  static numeroDeContas = 0;
  agencia;
  _cliente;
  _saldo = 0;

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    }
  }

  get cliente(){
    return this._cliente;
  }

  // qdo so tem um getter, ele so possibilita a leitura de saldo, nao permitindo a atribuicao de algum valor a esse saldo, tornando mais seguro
  get saldo(){
    return this._saldo;
  }

  constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente;
    // estou me refirindo a todas as contas correntes
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor){
    if(this._saldo >= valor){
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor){
    if(valor < 0){
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta){
    const sacarValor = this.sacar(valor);
    conta.depositar(sacarValor);
  }
}