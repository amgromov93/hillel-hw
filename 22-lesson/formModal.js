class FormModal {
    static INPUT_SELECTOR = 'input, textarea';

    #dialog;
    #$inputs;

    constructor(modalElSelector, createData) {
        this.#$inputs = $(FormModal.INPUT_SELECTOR);
        this.#dialog = $(modalElSelector).dialog({
            autoOpen: false,
            height: 400,
            width: 350,
            modal: true,
            buttons: {
                Save: () => {
                    const data = this.getData();

                    createData(data);
                    this.close();
                },
                Cancel: this.close.bind(this),
            },
            close: this.close.bind(this),
        });
    }

    getData() {
        return {
            description: $inputs.val()
        }
    }

    open() {
        this.#dialog.dialog( "open" );
    }

    close() {
        this.#dialog.dialog( "close" );
        this.clear();
    }

    clear() {
        this.#$inputs.val('');
    }
}