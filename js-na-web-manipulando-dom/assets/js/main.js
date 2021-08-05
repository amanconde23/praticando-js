import BotaoConclui from '../components/concluirTarefa.js'
import BotaoDeleta from '../components/deletarTarefa.js'

const criarTarefa = (event) => {
  event.preventDefault();

  const lista = document.querySelector('[data-list]')
  const input = document.querySelector('[data-form-input]')
  const valor = input.value
  const msgErro = document.querySelector('.error');

  if(valor != ''){
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    
    input.value = ''
    msgErro.textContent = ''
  }else{
    msgErro.textContent = 'Favor preencher esse campo'
  }
}

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', criarTarefa)

