class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        
        super(username)
        this.email = email
        this.password = password

    }

    addCourses(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const tutor = new Teacher("Rahul", "rahul@google.com", 123)
tutor.addCourses()

const student = new User("Rahul")
student.logMe()

// student.addCourses()
tutor.logMe()

console.log(tutor === student);
console.log(tutor instanceof Teacher);
console.log(tutor instanceof User);