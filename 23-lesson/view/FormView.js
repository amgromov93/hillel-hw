class FormView extends View {
    static INPUT_SELECTOR = 'input, textarea';


    #$inputs;

    constructor(options) {
        super(options);
        this.options = options;
        this.$container = this.init();
        this.#$inputs = this.$container.find(TodoFormView.INPUT_SELECTOR);
    }

    onFormSubmit(e) {
        e.preventDefault();

        const data = this.getFormData();

        this.options.onSubmit(data);
    }

    getFormData() {
        const data = {};

        for(const input of this.#$inputs) {
            data[input.id] = input.value;
        }

        return data;
    }

    setFormData(data) {
        for(const input of this.#$inputs) {
            if (data[input.id]) {
                input.value = data[input.id];
            }
        }
    }

    clear() {
        this.#$inputs.val('');
    }
}