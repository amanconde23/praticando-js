export class Cliente {
  nome;
  _cpf;

  get cpf(){
    return this._cpf;
  }

  // so quero atibuir valor no momento da criacao do cliente
  constructor(nome, cpf){
    this.nome = nome;
    this._cpf = cpf;
  }
}