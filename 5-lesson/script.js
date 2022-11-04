const STUDENTS = [
    {
      id: 10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7]
    },
    {
      id: 11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7]
    },
    {
      id: 12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8]
    },
    {
      id: 13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9]
    }
]



console.log(averageStudentMark(10));;
console.log(averageGroupMark(STUDENTS));;

function averageGroupMark(students) {
  let avrStudentMark = 0;

  for (const student of students) {
    avrStudentMark += averageStudentMark(student.id);
  }

  return avrStudentMark / students.length;
}

function averageStudentMark(id) {
    const student = STUDENTS.find(s => s.id === id);

    if (student) {
      return arrAvarege(student.marks);
  }
}

function arrAvarege(arr) {
  let res = 0;

  for (const num of arr) {
    res = sum(res, num);
  }

  return res / arr.length
}

function sum(a, b) {
  return a + b;
}





















//     .map(person => {
//         return {
//             id: person.id,
//             averageMark: person.marks.reduce((total, mark) => {
//                 return total + mark / person.marks.length;
//             }, 0)
//         }
//     });

//     const student = studentId.find(student => student.id === id);
//     return console.log(student.averageMark);
// }

// function averageGroupMark(students) {
//     const allMarks = students.reduce((total, student) => total.concat(student.marks), []);
//     const allMarksSum = allMarks.reduce((total, mark) => total + mark);

//     return console.log(allMarksSum / allMarks.length);
// }