let arr = [-1,10,20,30,4,50,60];
// arr.forEach((el) =>{console.log(el)});


let arr2 = [{
    name:"abhishek",
    marks: 100
},{
    name:"Dheeraj",
    marks:92
},{
    name: "Bhuvnesh",
    marks: 88
}];

let square = arr.map((ele)=>(ele**2));
let gpa = arr2.map((ele)=>(ele.marks/10));
let even = square.filter((ele)=>(ele%2==0));
let max = arr.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
});

let multipleTen = arr.every((ele)=>(ele%10==0));

let min = arr.reduce((min,el)=>{
    if(el<min){
        return el;
    }else{
        return min;
    }
});
// console.log(min);

function addTwo(a,b=4){
    return a+b;
}

console.log(...arr);
console.log(..."abhishek");
let newArr = [..."abhishek"];

let odd= [1,3,5,7];
let even2 = [2,4,6,8];
let num = [...odd,...even2];


let user = {
    email:"abhishek1234@gmail.com",
    pass:"asfsfas"
}

let userCpy = {...user,id:"123"};

let spreadArr = {...arr};
// console.log(spreadArr);

function sum(msg, ...args){
    console.log(msg);
    return args.reduce((sum,el)=>(sum+el));
}

//destructring

let marathon = ["tony","hulk","thor","captain","peter","hawkeye","black widow"];
let [winner,runnerup,secondrunnerup,...others] = marathon;
// console.log(winner);
// console.log(runnerup);
// console.log(others);

const student={
    name:"abhishek",
    section:"J",
    rollno:3,
    username:"abhi123",
    password:"2345"
}

let {username,name} = student;

let arrPlus5 = arr.map((ele)=>(ele+5));
console.log(arrPlus5);

let arrSquare = (arr)=>{
    let arrcp = arr.map((el)=>(el**2 + el));
    console.log(arrcp);
    let sum = arrcp.reduce((sum,el)=>(sum+el));
    return sum/arrcp.length;
}

let words = ["abhi","prince","kapil"];
let wordUpper = words.map((ele)=> ele.toUpperCase());
console.log(words);
console.log(wordUpper);

function doubleAndReturnArgs(arr,...args){
    let newarr = [...arr,...args.map((ele)=>(ele*2))];
    return newarr;
}

function mergeObject(obj1,obj2){
    let newObj = {...obj1,...obj2};
    return newObj;
}