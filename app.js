let input = document.querySelector(".input")
let add = document.querySelector(".add-btn")
let container = document.querySelector(".task-list")

class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }

    crearDiv(tarea) {
        const inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.value = tarea;
        inputItem.disabled = true;
        inputItem.classList.add('item-input');

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('task');

        const containerDiv = document.createElement('div')
        containerDiv.classList.add('buttons')

        const botonEditar = document.createElement('button');
        botonEditar.innerHTML = '<i class="fa-solid fa-lock fa-xl"></i>';
        botonEditar.classList.add('lock-btn');

        const botonRemover = document.createElement('button');
        botonRemover.innerHTML = '<i class="fa-solid fa-trash fa-xl"></i>';
        botonRemover.classList.add('delete-btn');

        itemDiv.appendChild(inputItem);
        containerDiv.appendChild(botonEditar);
        containerDiv.appendChild(botonRemover);
        itemDiv.appendChild(containerDiv)

        container.appendChild(itemDiv);

        botonEditar.addEventListener('click', () => this.editar(inputItem, botonEditar));
        botonRemover.addEventListener('click', () => this.remover(itemDiv));
    }

    editar(input, boton) {
        input.disabled = !input.disabled;
        boton.innerHTML = input.disabled 
            ? '<i class="fa-solid fa-lock fa-xl"></i>' 
            : '<i class="fa-solid fa-lock-open fa-xl"></i>';
    }

    remover(item) {
        container.removeChild(item);
    }
}

function chequearInput() {
    if (input.value.trim() !== '') {
        new Item(input.value);
        input.value = ''
    }
}

add.addEventListener('click', chequearInput);