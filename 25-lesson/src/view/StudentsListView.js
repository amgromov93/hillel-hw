class StudentsListView extends View {
    static LIST_SELECTOR = '#studentsContainer';
    static DELETE_BUTTON_SELECTOR = '.deleteBtn';
    static ITEM_SELECTOR = '.studentItem';
    static STUDENT_MARKS_SELECTOR = '.studentMarks';
    static MARK_INPUT_SELECTOR = '.markInput';

    #$studentsContainer;

    constructor(options) {
        super(options);
        this.options = options;
        this.$container = this.init();
        this.#$studentsContainer = this.$container.find(StudentsListView.LIST_SELECTOR);
    }

    init() {
        return $(`
            <table>
                <thead>
                    <tr>
                        <th>Student name</th>
                        <th>Student marks</th>
                        <th>Action</th>
                    </tr>
                </thead>
            
                <tbody id="studentsContainer">
                    <!--  students list here  -->
                </tbody>
            </table>
        `)
        .on('click', StudentsListView.DELETE_BUTTON_SELECTOR, e => this.onDeleteBtnClick(e))
        .on('focusout', StudentsListView.MARK_INPUT_SELECTOR, e => this.onMarkInputFocusOut(e))
    }

    renderList(studentsList) {
        this.#$studentsContainer.html(studentsList.map(this.generateItemHTML));
    }

    addItem(student) {
        const html = this.generateItemHTML(student);

        this.#$studentsContainer.append(html);
    }

    onMarkInputFocusOut(e) {
        const student = this.getStudent(e.target);
        const marks = this.getStudentMarks(student);
        const id = this.getStudentId(student);

        this.options.onFocusOut(id, { marks });
    }

    getStudentMarks(student) {
        const marksInputs = student.querySelectorAll(StudentsListView.MARK_INPUT_SELECTOR);
        const marksInputsArr = Array.from(marksInputs);

        return marksInputsArr.map((input) => input.value);
    }

    getStudent(el) {
        return el.closest(StudentsListView.ITEM_SELECTOR);
    }

    getStudentId(el) {
        return el.dataset.id;
    }

    onDeleteBtnClick(e) {
        const id = this.getElementId(e.target)

        this.options.onDelete(id);
    }

    removeItem(id) {
        const $student = this.#$studentsContainer.find(`[data-id="${id}"]`)

        $student.remove();
    }
    
    getElementId(el) {
        return el.closest(StudentsListView.ITEM_SELECTOR).dataset.id;
    }

    replaceStudent(id, student) {
        const $oldStudent = this.$container.find(`[data-id="${id}"]`);
        const newStudent = this.generateItemHTML(student);
        
        $oldStudent.replaceWith(newStudent);
    }

    generateItemHTML(student) {
        return `
            <tr class="studentItem" data-id="${student.id}">
                <td>${student.name}</td>
                <td class="studentMarks">
                    ${student.marks.map((mark) => `<input class="markInput" value=${mark}>`).join("")}
                </td>
                <td>
                    <button class="deleteBtn">Видалити</button>
                </td>
            </tr>
        `
    }
}