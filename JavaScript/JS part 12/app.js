// async function greet(){
//     throw "some random error";
//     return "Hello";
// }

// greet()
// .then((result)=>{
//     console.log("promise was successful");
//     console.log(result);
// })
// .catch((err)=>{
//     console.log("Promise was rejected :",err);
// })

// let hello = async ()=>{
//     return 5;
// }


// let getNum = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() * 10) +1;
//             console.log(num);
//             resolve();
//         },1000);
//     })
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
//     getNum();
// }

// demo();

// let jsonRes = '{ "activity": "Shop at support your local farmers market", "type": "relaxation","participants": 1,"price": 0.2,"link": "","key": "8979931","accessibility": 0.1}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.activity);

// let student = {
//     name : "abhishek",
//     marks : 100
// };

// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2.fact);
// })
// .catch((err)=>{
//     console.log("error - ",err);
// })


// async function getFacts(){
//     let url = "https://catfact.ninja/fact";
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// }

// let p = document.querySelector("p");
// let btn = document.querySelector("button");
// let img = document.querySelector("img");

// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts();
//     await getImg();
//     p.innerText = fact;
// });

// async function getFacts(){
//     try{
//         let url = "https://catfact.ninja/fact";
//         let res = await axios.get(url);
//         getImg();
//         return res.data.fact;
//     } catch{
//         return "NO fact found";
//     }
// }

// async function getImg(){
//         let url = "https://dog.ceo/api/breeds/image/random";
//         let res = await axios.get(url);
//         img.setAttribute("src",res.data.message);
// }


// async function getJoke(){
//     try{
//         let url = "https://icanhazdadjoke.com/";
//         const config = {headers:{Accept :"application/json"}};

//         let res = await axios.get(url,config);
//         console.log(res);
//     }catch(err){
//         console.log(err);
//     }
// }


let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;

    let result = await getColleges(country);
    show(result);

})

function show(res){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(re of res){
        let li =document.createElement("li");
        li.innerHTML = re.name;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    } catch(e){
        console.log("Error is: ",e);
        return [];
    }
}
