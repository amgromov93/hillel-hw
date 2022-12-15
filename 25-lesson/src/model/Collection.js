class Collection {
    #list = [];
    
    fetch() {
        return StudentsApi.getList()
            .then(list => this.#list = list)
    }

    create(student) {
        return StudentsApi.create(student)
            .then((newStudent) => {
                this.#list.push(newStudent);
        
                return newStudent;
            });   
    }

    update(id, marks) {
        return StudentsApi.update(id, marks)
            .then((updateStudent) => {
                const student = this.findById(id);
        
                student.marks = updateStudent.marks;
        
                return student;
            });
    }

    delete(id) {
        return StudentsApi.delete(id).then(() => {
            this.#list = this.#list.filter(student => student.id !== id);
        })
    }

    findById(id) {
        return this.#list.find(student => student.id === id);
    }
}