class StudentsFormView extends FormView {
    init() {
        return $(`
            <form id="studentForm">
                <input id="id" type="hidden"/>
                <input id="name" type="text" placeholder="Write name"/>
                <button>Відправити</button>
            </form>
        `)
        .on('submit', e => this.onFormSubmit(e));
    }
}