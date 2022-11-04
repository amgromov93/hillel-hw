class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getAverageMark() {
        return this.getMarksSum() / this.marks.length;
    }

    getMarksSum() {
        this.markSum = 0;

        for (const num of this.marks) {
            this.markSum += num;
        }
         
        return this.markSum;
    }
}

class Group {
    students = [];
     
    addStudent(student) {
        this.isStudent(student);
    }

    isStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        }
    }

    getAverageMark() {
        return this.getAverageMarksSum() / this.students.length;
    }

    getAverageMarksSum() { 
        this.getAverageMarksSum = 0;

        for (const student of this.students) {
            this.getAverageMarksSum += student.getAverageMark();
        }
        
        return this.getAverageMarksSum;
    }
}

const group = new Group();

group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10,])); // средний балл = 8
group.addStudent({}); // игнорируем добавлениие невалидных данных

// Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);