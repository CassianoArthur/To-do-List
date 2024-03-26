document.addEventListener("DOMContentLoaded", function() {
    const novaTarefaInput = document.getElementById('input_nova_tarefa');
    const listaTarefas = document.getElementById('lista_de_tarefas');
    const adicionarTarefaBtn = document.getElementById('adicionar-tarefa-btn');
    const resetarTarefasBtn = document.getElementById('resetar-tarefas-btn');

    adicionarTarefaBtn.addEventListener('click', adicionaTarefaNaLista);
    novaTarefaInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionaTarefaNaLista();
        }
    });
    resetarTarefasBtn.addEventListener('click', resetTarefas);

    function adicionaTarefaNaLista() {
        const novaTarefaTexto = novaTarefaInput.value.trim();

        if (novaTarefaTexto !== '') {
            const novaTarefa = criaNovoItemDaLista(novaTarefaTexto);
            listaTarefas.appendChild(novaTarefa);
            novaTarefaInput.value = ''; 
        }
    }

    function criaNovoItemDaLista(textoDaTarefa) {
        const novoItem = document.createElement('li');
        novoItem.innerText = textoDaTarefa;
        novoItem.appendChild(criaInputCheckBoxTarefa());
        return novoItem;
    }

    function criaInputCheckBoxTarefa() {
        const inputTarefa = document.createElement('input');
        inputTarefa.type = 'checkbox';
        inputTarefa.addEventListener('click', mudaEstadoTarefa);
        return inputTarefa;
    }

    function mudaEstadoTarefa() {
        const tarefa = this.parentElement;
        if (this.checked) {
            tarefa.style.textDecoration = 'line-through';
        } else {
            tarefa.style.textDecoration = 'none';
        }
    }

    function resetTarefas() {
        listaTarefas.innerHTML = '';
    }
        });
    
        
    
