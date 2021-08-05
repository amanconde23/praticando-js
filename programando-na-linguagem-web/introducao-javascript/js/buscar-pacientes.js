var botaoBuscarPacientes = document.querySelector('#buscar-pacientes');

botaoBuscarPacientes.addEventListener('click', function(){
  console.log('buscando pacientes..')

  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api-pacientess.herokuapp.com/pacientes');

  // addEventListener observa se as info carregaram ou nao
  xhr.addEventListener('load', function(){
    var mensagemErroAjax = document.querySelector('#erro-ajax');

    // se as info carregaram sem erro
    if(xhr.status === 200){
      var resposta = xhr.responseText;
      // transforma todo conteudo da resposta em um array de objetos
      var pacientes = JSON.parse(resposta);

      // para cada objeto do array (paciente), executa funcao que adiciona paciente da tabela
      pacientes.forEach(function(paciente){
        adicionarPacienteNaTabela(paciente);
      });
    }else{
      mensagemErroAjax.classList.remove('esconder');
    }
  })

  xhr.send();
})