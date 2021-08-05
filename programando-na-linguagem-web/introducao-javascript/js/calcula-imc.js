var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

// calcula o imc de cada paciente e faz validacao de peso e altura
for(i = 0; i < pacientes.length; i++){
  // pega valor do peso do paciente
  var tdPeso = pacientes[i].querySelector('.info-peso');
  var peso = tdPeso.textContent;

  // faz validacao do peso chamando funcao
  var pesoEhValido = validaPeso(peso);

  // pega valor da altura do paciente
  var tdAltura = pacientes[i].querySelector('.info-altura');
  var altura = tdAltura.textContent;

  // faz a validacao da altura chamando funcao
  var alturaEhValida = validaAltura(altura);

  // pega campo imc da tabela
  var tdImc = pacientes[i].querySelector('.info-imc');

  // se o peso nao for valido, cai nesse if, que vai inserir no campo imc a frase "peso invalido" e adicionar uma classe .paciente-invalido (que vai deixar campo vermelho)
  if(!pesoEhValido){
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    pacientes[i].classList.add('paciente-invalido');
  }

  // se a altura for invalida, cai nesse if, que adiciona ao campo imc a frase "altura invalida" e adicionar classe .paciente-invalido (que deixa campo vermelho)
  if(!alturaEhValida){
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
    pacientes[i].classList.add('paciente-invalido');
  }

  // se a altura e o peso forem validos, chama a funcao e calcula imc com o peso e altura recebidos no td do paciente, e adiciona no campo imc o resultado do calculo do imc
  if(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura){
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

function validaPeso(peso){
  if(peso >= 0 && peso < 1000 ){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura){
  if(altura >= 0 && altura <= 3.0){
    return true;
  }else{
    return false;
  }
}