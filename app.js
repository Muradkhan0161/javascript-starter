// js var let function
// const name = 'Murad';
// let age = 25;
// let isCseStudent = true;

// age = 20;
// name = 'Md Murad Khan'

// function info(userName, userAge, education){
//     return `Applicant name ${userName} He is ${userAge} years old, from CSE ${education}`  
// }

// console.log(info(name,age,isCseStudent))

// const add = (a,b) => a+b;

// console.log(add(2,3))

// const addOne = a => a+1;

// console.log(addOne(1))


// js method in the function 
// const person = {
//     name : 'Murad',
//     age : 25,
//     greet(){
//         console.log('Hey, My name is ' + this.name )
//     }
// };

// person.greet();


// array map
const hobbies = ['football', 'basketball', 'coding'];

// for( let hobby of hobbies){
//     console.log(hobby)
// }

// console.log(hobbies);
console.log(hobbies.map( hobby => {
    return ( 'Hobby is ' + hobby )
}))

console.log(hobbies)