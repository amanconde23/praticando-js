var campoFiltro = document.querySelector('#filtrar-tabela');

// o addEventListener 'input' observa tudo que eh digitado
campoFiltro.addEventListener('input', function(){
  var pacientes = document.querySelectorAll('.paciente');

  // se o usuario estiver digitando algo, verifica se o nome da tabela bate ou nao com o digitado
  if(this.value.length > 0){
    for(var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector('.info-nome');
      var nome = tdNome.textContent;
      // 'i' nao discrimina letra maiuscula ou minuscula
      var expressao = new RegExp(this.value, 'i');
      // se o nome da tabela for diferente do digitado, adiciona-se a classe 'esconder', desaparecendo da tabela
      if(!expressao.test(nome)){
        paciente.classList.add('esconder');
      }else{
        paciente.classList.remove('esconder');
      }
    }
    // senao estiver digitando (ou tiver apagado o que escreveu) mostra todos os nomes da lista
  }else{
    for(var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      paciente.classList.remove('esconder');
    }
  }
})