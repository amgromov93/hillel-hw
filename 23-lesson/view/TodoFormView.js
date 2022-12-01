class TodoFormView extends FormView {

    init() {
        return $(`
            <form id="todoForm">
                <input id="id" type="hidden"/>
                <input id="title" type="text" placeholder="Write message"/>
                <button>Відправити</button>
            </form>
        `)
        .on('submit', e => this.onFormSubmit(e));
    }
}