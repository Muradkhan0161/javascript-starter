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


//js method in the function 
const person = {
    name : 'Murad',
    age : 25,
    greet(){
        console.log('Hey, My name is ' + this.name )
    }
};

// person.greet();


// array map
const hobbies = ['football', 'basketball', 'coding'];

// for( let hobby of hobbies){
//     console.log(hobby)
// }

// console.log(hobbies);
// console.log(hobbies.map( hobby => {
//     return ( 'Hobby is ' + hobby )
// }))

// console.log(hobbies)


// Reference types
// const hobbies = ['football', 'basketball', 'coding'];

// hobbies.push('movies');
// console.log(hobbies);


//slice, spread and rest operators
// const hobbies = ['football', 'basketball', 'coding'];

// const copyHobby = hobbies.slice();
// console.log(copyHobby);

// const copyHobby = hobbies;
// console.log(copyHobby);

// const copyHobby = [...hobbies]
// console.log(copyHobby);

// const copyPerson = {...person}
// console.log(copyPerson);

// const toArray = (...args) => {
//     return args
// }
// console.log(toArray(1,2,3,4,5))


// destructuring
// const printName = ({name}) => {
//     console.log(name);
// }
// printName(person);

// const { name, age } = person; //obb
// console.log(name,age);

// const [hob1,hob2] = hobbies; //array
// console.log(hob1,hob2);


//async code promises
const fetchData = callback => {
    const promise = new Promise ((resolve , reject) => {
        setTimeout(() => {
            resolve('done');
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log('You will find peace!')
    fetchData().then(text => {
        console.log(text)
        return fetchData()
    })
    .then(text2 => {
        console.log(text2)
    })
}, 2000);

console.log('hi');
console.log('hello');