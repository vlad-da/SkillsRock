const inputAdd = document.querySelector('.todo-list-task__input'),
    list = document.querySelector('.todo-list'),
    addBtn = document.querySelector('.todo-list-task__btn');

let tasks = [];
let arr = [];
let count = 0;

// добавляет элемент
function addItem() {
    if(inputAdd.value === '') {
        console.log('Пусто');
        return
    }

    tasks.push({text: inputAdd.value, checked: false});
    inputAdd.value = '';
    arr = [...tasks];
    reloadList();
}
//изменяет состояние чекбокса
function toggleChecked(index) {
    tasks[index].checked = !tasks[index].checked;
    console.log(tasks[index]);
    
}

// обновляет список задач
function reloadList() {
    list.innerHTML = '';

    tasks.forEach((task, index) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="todo-list__item ${task.checked ? 'active' : ''}">
            <input type="checkbox" ${task.checked ? 'checked' : ''} class="todo-list__checkbox"  id="id-${index}" />
            <label for="id-${index}">${task.text}</label>
            <img src="./close.svg" alt="close" onclick="deleteItem(${index})">
        </div>
        `;
        //изменяет состояние чекбокса
        div.addEventListener('change', () => toggleChecked(index));
        list.append(div);
    });
    
}

//удаление
function deleteItem(index) {
    tasks.splice(index, 1);
    reloadList();
}


//значение для фильтра
const select = document.querySelector('select'); // выбираем элемент select
select.addEventListener('change', function(){  
    const selectedValue = select.value;
    filterTasks(selectedValue);
});

//фильтр
function filterTasks(value) {
    if(value === 'все' ) {
        tasks = arr;
    }
    if(value === 'завершённые' ) {
        tasks = [...arr].filter(item => item.checked);
    }
    if(value === 'активные' ) {
        tasks = [...arr].filter(item => !item.checked);
    }
    reloadList();
}