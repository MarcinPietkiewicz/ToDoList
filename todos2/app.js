const list = document.querySelector('.todos');
const addForm = document.querySelector('.add');
const searchForm = document.querySelector('.search');
const search = document.querySelector('.search input');
const cancelBtn = document.querySelector('.cancelBtn');
// delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})
// add todo
const generateTemplate = todo => {
    const html = ` <li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="fas fa-trash-alt delete"></i>
</li>
`;
    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo.length > 0) {
        generateTemplate(todo);
        addForm.reset();
    }
})
// search todos
const filterTodos = term => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
}


search.addEventListener('keyup', e => {
    const term = search.value.trim();
    if (term.length > 0) {
        cancelBtn.classList.add('show');
    }
    filterTodos(term);
})


// cancel search
cancelBtn.addEventListener('click', e => {
    search.value = '';
    Array.from(list.children)
        .forEach((todo) => todo.classList.remove('filtered'));
    cancelBtn.classList.remove('show');
})