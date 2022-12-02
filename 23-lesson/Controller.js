class Controller {
    #$rootEl;

    constructor($rootEl) {
        this.#$rootEl = $rootEl;
        this.collection = new Collection();
        this.formView = new TodoFormView({
            onSubmit: todo => this.saveTodo(todo),
        });
        this.listView = new TodoListView({
            onEdit: (id) => this.editTodo(id),
            onDelete: (id) => this.deleteTodo(id),
        });

        this.formView.appendTo(this.#$rootEl);
        this.listView.appendTo(this.#$rootEl);

        this.collection.fetch().then((list) => {
            this.listView.renderList(list);
        })
    }

    saveTodo(todo) {
        if (todo.id) {
            this.collection
                .update(todo.id, todo)
                .then(() => {
                    this.listView.replaceItem(todo.id, todo);
                    this.formView.clear();
                })
                .catch(this.showError);
        } else {
            this.collection
                .create(todo)
                .then((newTodo) => {
                    this.listView.addItem(newTodo);
                    this.formView.clear();
                })
                .catch(this.showError)
        }
    }

    editTodo(id) {
        const todo = this.collection.findById(id);

        this.formView.setFormData(todo);
    }

    deleteTodo(id) {
        this.collection.delete(id);
        this.listView.removeItem(id);
    }

    showError(error) {
        alert(error.message);
    }
}