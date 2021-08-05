// componente comeca com maiusculo
const BotaoConclui = () => {
  const botaoConclui = document.createElement('button');
  botaoConclui.classList.add('check-button')
  botaoConclui.innerText = "check"

  botaoConclui.addEventListener('click', concluirTarefa)

  return botaoConclui;
}

const concluirTarefa = (event) => {
  const btnConcluir = event.target

  // pegar o li
  const tarefaCompleta = btnConcluir.parentElement
  // qdo for clicado pela primeira vez, adiciona a classe, se clicar de novo ele retira a classe
  tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui