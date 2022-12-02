class TodoListView extends View {
    static LIST_SELECTOR = '#todoContainer';
    static EDIT_BUTTON_SELECTOR = '.editBtn';
    static DELETE_BUTTON_SELECTOR = '.deleteBtn';
    static TODO_ITEM_SELECTOR = '.todoItem';


    #$todoContainer;

    constructor(options) {
        super(options);
        this.options = options;
        this.$container = this.init();
        this.#$todoContainer = this.$container.find(TodoListView.LIST_SELECTOR);
    }

    init() {
        return $(`
            <table>
                <thead>
                    <tr>
                        <td>To do</td>
                        <td>Action</td>
                    </tr>
                </thead>
            
                <tbody id="todoContainer">
                    <!--  todo list here  -->
                </tbody>
            </table>
        `)
        .on('click', TodoListView.EDIT_BUTTON_SELECTOR, e => this.onEditBtnClick(e))
        .on('click', TodoListView.DELETE_BUTTON_SELECTOR, e => this.onDeleteBtnClick(e));
    }

    onEditBtnClick(e) {
        const id = this.getElementId(e.target)
    
        this.options.onEdit(id);
    }

    addItem(todo) {
        const html = this.generateItemHTML(todo);

        this.#$todoContainer.append(html);
    }

    onDeleteBtnClick(e) {
        const id = this.getElementId(e.target)

        this.options.onDelete(id);
    }

    removeItem(id) {
        const $todo = this.#$todoContainer.find(`[data-id="${id}"]`)

        $todo.remove();
    }

    replaceItem(id, todo) {
        const $oldTodoElement = $(`[data-id="${id}"]`);
        const newTodoElement = this.generateItemHTML(todo);
    
        $oldTodoElement.replaceWith(newTodoElement);
    }

    getElementId(el) {
        return el.closest(TodoListView.TODO_ITEM_SELECTOR).dataset.id;
    }

    renderList(todoList) {
        this.#$todoContainer.html(todoList.map(this.generateItemHTML));
    }

    generateItemHTML(todo) {
        return `
            <tr class="todoItem" data-id="${todo.id}">
                <td>${todo.title}</td>
                <td>
                    <button class="editBtn">Обрати</button>
                    <button class="deleteBtn">Видалити</button>
                </td>
            </tr>
        `
    }
}