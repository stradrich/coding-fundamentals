// 2 Characthers: student, teacher
// name, age, subject
// Method: .greet() .registerSubject()

class schoolPopulation {
    constructor(name, age, subjects, title) {
        this.name = name 
        this.age = age
        this.subjects = subjects
        this.title = title 
    }

    greet() {
        console.log(`Hello, my name is ${this.name}! I am ${this.age} years old. I will be attending ${this.subjects} in this term`)
    }
}


class student extends schoolPopulation {
    constructor(name, age, subjects) {
        super(name,age, subjects)
       
    }

   register(subject) {
        this.subjects = push(subjects)
   }
}

class teacher extends schoolPopulation {
    constructor(name, age, subjects, title) {
        super(name,age, subjects, title)
    }

    greet() {
        console.log(`Hello, I'm ${this.title} ${this.name}!`)
    }
}

const studentA = new student('Tan', 20, ['Big History', 'Philosophy', 'Physics', 'Chemistry', 'Biology', 'Music'])
const studentB = new student('Wong', 19, ['Economics','Accounting'])
const studentC = new student('Lim', 18, ['Statistics','Computer Science'])
const teacherA = new teacher('Mr.','Lee')
const teacherB= new teacher('Pang','Ms.')

studentA.greet()
studentB.greet()
studentC.greet()
teacherA.greet()
teacherB.greet()