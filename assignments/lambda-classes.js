// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(arr) {
        return arr.join();
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standup time!​​​​​`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}



const goku = new Instructor({
    name: 'Goku',
    location: 'Earth',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Is it time to eat?`
});

const naruto = new Student({
    name: 'Naruto',
    location: 'Leaf Village',
    age: 18,
    gender: 'male',
    previousBackground: 'Ninja Stuff',
    className: 'Team 7',
    favSubjects: ['Python','PHP','Ruby']
});

const ichigo = new ProjectManager({
    name: 'Ichigo',
    location: 'karakura town',
    age: 20,
    gender: 'male',
    gradClassName: 'Soul Society',
    favInstructor: 'Kisuke Urahara',
    catchPhrase: `getsuga tenshou!`
});


console.log(naruto.location); 
console.log(naruto.speak()); 
console.log(goku.speak()); 
console.log(ichigo.speak()); 
console.log(goku.location);
console.log(goku.demo('Python'));
console.log(goku.grade(naruto, 'Python'));
console.log(naruto.className);
console.log(ichigo.catchPhrase);
console.log(ichigo.debugsCode(naruto, 'JavaScript')); 
console.log(ichigo.standUp('Ninja Channel')); 
console.log(naruto.listsSubjects(naruto.favSubjects)); 
console.log(naruto.PRAssignment('CSS')); 
console.log(naruto.sprintChallenge('React')); 