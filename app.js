// const name = 'Murad';
// let age = 25;
// let isCseStudent = true;

// age = 20;
// //name = 'Md Murad Khan'

// function info(userName, userAge, education){
//     return `Applicant name ${userName} He is ${userAge} years old, from CSE ${education}`  
// }

// console.log(info(name,age,isCseStudent))

// const add = (a,b) => a+b;

// console.log(add(2,3))

// const addOne = a => a+1;

// console.log(addOne(1))

const person = {
    name : 'Murad',
    age : 25,
    greet(){
        console.log('Hey, My name is ' + this.name )
    }
};

person.greet();
