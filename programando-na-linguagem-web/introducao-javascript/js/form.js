// capta quando o botao adicionar eh clicado
var botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');
botaoAdicionarPaciente.addEventListener('click', (event) => {

  // previne o carregamento da pagina (que eh o comportamento padrao do botao submit)
  event.preventDefault();

  // seleciona o form
  var form = document.querySelector('#form-adicionar-paciente');

  // chama a funcao que pega as info digitadas no form
  var paciente = obterInfoDoForm(form);

  // chama a funcao que valida as info fo paciente
  var erros = validaPaciente(paciente);

  // se o array erros for maior que 0, eh pq apresenta erros, portanto, chama a funcao exibeMensagemDeErro
  if(erros.length > 0){
    exibeMensagemDeErro(erros);
    return;
  }

  // chamando a funcao que adiciona paciente na tabela
  adicionarPacienteNaTabela(paciente);
  
  // reseta form (depois de adicionar paciente, as info do form sao apagadas, e as mensagens de erro tambem)
  form.reset();
  var mensagensErro = document.querySelector('#mensagens-erro');
  mensagensErro.innerHTML = ''
})

function adicionarPacienteNaTabela(paciente){
  // chama a funcao que monta o tr da tabela com as info do paciente
  var pacienteTr = montarTr(paciente);

  // seleciona tabela pacientes
  var tabela = document.querySelector('#tabela-pacientes');

  // adiciona como filho da tabela pacientes um tr (pacienteTr)
  tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros){
  var ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = "";

  // para cada erro, cria o elemento li, insere a mensagem de erro, e adiciona um filho para a ul (li)
  erros.forEach(function(erro){
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  })
}

function obterInfoDoForm(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    // no objeto, pode ocorrer a chamada de uma funcao
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  
  return paciente;
}

function montarTr(paciente){
  var pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente')

  // adiciona um filho ao tr (td), com a info do paciente
  pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'));
  pacienteTr.appendChild(montarTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(montarTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(montarTd(paciente.gordura, 'info-gordura'));
  pacienteTr.appendChild(montarTd(paciente.imc, 'info-imc'));

  return pacienteTr;
}

function montarTd(dado, classe){
  // cria um td
  var pacienteTd = document.createElement('td');
  // adiciona ao td o dado enviado na funcao montarTr (paciente.nome, paciente.peso, ...)
  pacienteTd.textContent = dado;
  // adiciona classe ao td enviada na funcao montarTr (.info-nome, .info-peso, ...)
  pacienteTd.classList.add(classe)

  return pacienteTd;
}

function validaPaciente(paciente){
  var erros = [];

  if(paciente.nome.length === 0){
    erros.push('O nome do paciente não pode ser em branco');
  }

  if(!validaPeso(paciente.peso)){
    erros.push('Peso é inválido');
  }

  if(!validaAltura(paciente.altura)){
    erros.push('Altura é inválida');
  }

  if(paciente.gordura.length === 0){
    erros.push('A gordura do paciente não pode ser em branco')
  }

  if(paciente.peso.length === 0){
    erros.push('O peso não pode ser em branco')
  }

  if(paciente.altura.length === 0){
    erros.push('A altura não pode ser em branco')
  }

  return erros;
}
