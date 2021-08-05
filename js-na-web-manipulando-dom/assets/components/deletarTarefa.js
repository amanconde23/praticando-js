// componente comeca com maiusculo
const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button')

  botaoDeleta.innerText = 'deletar'
  botaoDeleta.classList.add('delete-button')
  botaoDeleta.addEventListener('click', deletarTarefa)

  return botaoDeleta;
}

const deletarTarefa = (event) => {
  const btnDeletar = event.target

  const tarefaDelete = btnDeletar.parentElement
  tarefaDelete.remove()

  return btnDeletar;
}

export default BotaoDeleta