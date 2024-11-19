const inputAdd = document.querySelector('.todo-list-task__input'),
    list = document.querySelector('.todo-list'),
    addBtn = document.querySelector('.todo-list-task__btn');

let tasks = [];
let arr = [];
let count = 0;

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

function toggleChecked(index) {
    tasks[index].checked = !tasks[index].checked;
    console.log(tasks[index]);
    
}

function reloadList() {
    list.innerHTML = '';

    tasks.forEach((task, index) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="todo-list__item ${task.checked ? 'active' : ''}">
            <input type="checkbox" class="todo-list__checkbox ${task.checked ? 'active' : ''}"  id="id-${index}" />
            <label for="id-${index}">${task.text}</label>
            <img src="./close.svg" alt="close" onclick="deleteItem(${index})">
        </div>
        `;
        div.addEventListener('change', () => toggleChecked(index));
        list.append(div);
    });
    
}

function deleteItem(index) {
    tasks.splice(index, 1);
    reloadList();
}

const select = document.querySelector('select'); // выбираем элемент select
select.addEventListener('change', function(){  
    const selectedValue = select.value;
    // this в этом контексте - элемент, который запустил фукнцию. То же, что и select.value;
    console.log( selectedValue );
    // filterTasks(selectedValue);
});


// function filterTasks(value) {
//     if(value === 'все' ) {
//         tasks = arr;
//     }
//     if(value === 'завершённые' ) {
//         tasks = tasks.filter(item => item.checked);
//     }
//     if(value === 'активные' ) {
//         tasks = tasks.filter(item => item.checked);
//     }
//     reloadList();
//     console.log(arr);
// }