var tabela = document.querySelector('table');

// adiciona um eventListener no pai de todos os elementos da tabela (que eh a tabela)
tabela.addEventListener('dblclick', function(event){
  // quem recebeu o evento do clique (um td)
  // var alvoEvento = event.target;
  // quem eh o pai de quem recebeu o clique (eh um tr)
  // var paiAlvo = alvoEvento.parentNode;
  // exclui o pai de quem recebeu o clique
  // paiAlvo.remove();

  event.target.parentNode.classList.add('fadeOut');

  // espera 5s (tempo definido no fadeOut do css) para remover
  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500);
})