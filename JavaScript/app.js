// let todo = [];
// let req = prompt("Enter your request");

// while(true){
//     if(req == "quit"){
//         console.log("Quitting the app");
//         break;
//     }

//     if(req == "add"){
//         let task = prompt("Enter the task you want to add");
//         todo.push(task);
//         console.log("Task added");
//     }else if(req == "list"){
//         console.log("---------------");
//         for(let i = 0;i<todo.length;i++){
//             console.log(i, todo[i]);
//         }
//         console.log("---------------");
//     }else if(req == "delete"){
//         let temp = prompt("Enter the index of task you want to delete");
//         todo.splice(temp,1);
//         console.log("Task deleted");
//     }else{
//         console.log("Wrong Request!!!");
//     }
//     req = prompt("Enter your request");
// }

// let arr = [1,2,3,4,5,6,2,3,2];
// let num = 2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// let num = 287152;
// let count = 0;
// let sum = 0;
// while(num!=0){
//     sum += num%10;
//     num = parseInt(num/10);
//     // console.log(num);
//     count++;
// }
// console.log(count);
// console.log(sum);

// let num = prompt("Enter n");
// let fact = 1;
// for(let i=1;i<=num;i++){
//     fact *= i;
// }
// console.log(fact);

// let student={
//     name: "Abhishek",
//     marks: "99",
//     section: "J",
// }
// console.log(student.section);
// console.log(typeof student);

// const post = {
//     username: "@abhishek",
//     content: "hello this is my #firstpost",
//     likes: 150,
//     reposts: 12,
//     tags: ["@abhinav","@dheeraj"]
// }

// const classInfo={
//     abhishek:{
//         grade:"A+",
//         city:"Mathura"
//     },
//     dheeraj:{
//         grade:"A",
//         city:"Aligarh"
//     },
//     jatin:{
//         grade: "O",
//         city: "Virndhavan"
//     }
// }

// let x = Math.random();
// x = x*5;
// x = Math.floor(x);
// console.log(x);

// let car = {
//     name: "BMW",
//     model: "latest",
//     color: "dark red"
// }

// let max = prompt("Enter the maximum number");
// const random = Math.floor(Math.random() * max) + 1;
// console.log(random);
// let guess = prompt("Enter your guess");
// while(true){
//     if(guess=="quit"){
//         console.log("User Quit");
//         break;
//     }
//     if(guess==random){
//         console.log("You are right. Congrats!!");
//         break;
//     } else{
//         guess = prompt("Your guess is wrong. Please try again!!");
//     }
// }

function hello(){
    console.log("Hello world");
}

hello();

function diceRoll(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

function calAvg(a,b,c){
    console.log("The avg is ",(a+b+c)/3);
}

function table(a){
    for(let i=1;i<=10;i++){
        console.log(i*a);
    }
}

function towerOfHanoi(n,src,helper,dest){
    if(n==1){
        console.log(`transfer ${n} from ${src} to ${dest}`);
        return;
    }
    towerOfHanoi(n-1,src,dest,helper);
    console.log(`transfer ${n} from ${src} to ${dest}`);
    towerOfHanoi(n-1,helper,src,dest);
}

let sum = 54;
function calSum(a,b){
    let sum = a+b;
    console.log(sum);
}

function outerFun(){
    let x=5;
    let y=6;
    function innerFun(){
        console.log(x);
    }
    innerFun();
}

let calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    }
}

function largerThanNum(arr,n){
    for(ele of arr){
        if(ele>n){
            console.log(ele);
        }
    }
}

function extraction(str){
    ans = "";
    for(let i=0;i<str.length;i++){
        let char = str[i];
        flag = 0;
        for(let j=0;j<ans.length;j++){
            if(char == ans[j]){
                flag = 1;
            }
        }
        if(flag == 0){
            ans += char;
        }
    }
    console.log(ans);
}

function longestCountName(arr){
    let country = "";
    for(ele of arr){
        if(ele.length>country.length){
            country = ele;
        }
    }
    return country;
}

function countVowel(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]== 'a' || str[i]== 'e' || str[i]=='i' || str[i]=='o' || str[i]== 'u' ){
            count++;
        }
    }
    return count;
}

function randomRange(start, end){
    let diff = end - start;
    let num = Math.floor(Math.random() * diff) + start;
    return num;
}

student = {
    name: "abhishek",
    age: 19,
    sec: "J",
    eng: 12,
    math: 30,
    getAvg(){
        console.log((this.eng+this.math)/2);
    }
}
function avg(){
    console.log(this);
}

// let a = 6;
// try {
//     console.log(a);
// } catch {
//     console.log("A is not defined an error occur");
// }

const sum2 = (a,b) =>{
    console.log(a+b);
}

const cube = (a) => {
    return a*a*a;
}

const cube2 = n => (n**3);

// console.log("hii there");
// setTimeout(()=>{
//     console.log("apna college");
// },4000);
// console.log('Welcome to');


// let id = setInterval(()=>{
//     console.log("hello world");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
// },10000);


let arrayAverage = (arr) =>{
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

let even = n => (n%2==0);

// const object = {
//     message: "hello, world",
//     logMessage(){
//         console.log(this.message);
//     } 
// }
// setTimeout(object.logMessage,2000);

let length = 4;
function callback(){
    console.log(this.length);
}
const object = {
    length: 5,
    method(callback){
        callback();
    }
}
object.method(callback,1,2);
// setInterval(()=>{
//     console.log("abhishek");
// },3000)
// console.log(calculator.add(3,5));
// calSum(1,3);
// console.log(sum);
// towerOfHanoi(2,"S","H","D");
// table(prompt("Enter a number"));
// calAvg(2,3,4);
// diceRoll();