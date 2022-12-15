class Controller {
    #$rootEl;

    constructor($rootEl) {
        this.#$rootEl = $rootEl;
        this.collection = new Collection();
        this.listView = new StudentsListView({
            onDelete: (id) => this.deleteStudent(id),
            onFocusOut: (id, marks) => this.editMarks(id, marks)
        });
        this.formView = new StudentsFormView({
            onSubmit: student => this.saveStudent(student)
        })

        this.listView.appendTo(this.#$rootEl);
        this.formView.appendTo(this.#$rootEl);

        this.collection.fetch().then((list) => {
            this.listView.renderList(list);
        })
    }

    saveStudent(student) {
        this.collection
            .create(student)
            .then((newStudent) => {
                this.listView.addItem(newStudent);
                this.formView.clear();
            })
            .catch(this.showError)
    }

    deleteStudent(id) {
        this.collection.delete(id);
        this.listView.removeItem(id);
    }

    editMarks(id, marks) {
        this.collection.update(id, marks)
            .then((updateStudent) => {
                this.listView.replaceStudent(updateStudent.id, updateStudent)
        })
        .catch(this.showError);
    }

    showError(error) {
        alert(error.message);
    }
}