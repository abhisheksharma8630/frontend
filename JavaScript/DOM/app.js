// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("#mainImg"));

// console.dir(document.querySelectorAll("div a"));

// let div1 = document.createElement("div");
// let body = document.querySelector("body");
// body.appendChild(div1);
// let p = document.createElement("p");
// p.innerText = "Hii I'm red";
// p.style.color = "red";
// div1.appendChild(p);
// div1.classList.add("que");

// let h3 = document.createElement("h3");
// h3.innerText = "Hii I'm Blue h3!";
// h3.style.color = "blue";
// div1.appendChild(h3);

// let inp = document.createElement("input");
// let body = document.querySelector("body");
// body.append(inp);
// inp.setAttribute("placeholder","username");
// let btn = document.createElement("button");
// btn.innerText ="Click me";
// body.append(btn);
// btn.id = "btn";
// console.log(btn.id);

// let butn = document.querySelector("#btn");
// butn.classList.add("que3");
// let heading = document.createElement("h1");
// heading.innerText = "DOM Practice";
// body.prepend(heading);
// heading.classList.add("que4");

// let p = document.createElement("p");
// p.innerHTML = "Apna College <b>Delta</b> Practice";
// body.append(p);


// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.ondblclick = function() {
//         console.log("button was clicked");
//     }
//     btn.onmouseenter = function(){
//         console.log("Jaldi waha se hato");
//     }
// }


// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.addEventListener("click",function (){
//         console.log("button clicked");
//     });
//     btn.addEventListener("dblclick",hello);
//     btn.addEventListener("mouseenter",mouseEnter);
//     btn.addEventListener("mouseleave",mouseLeave);
//     btn.addEventListener("mousemove",function(){console.log("accha beta move kr rha hai")});
// }


// let btn = document.querySelector("button");
// btn.addEventListener("click",btnTrigger);

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
// })

// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     alert(`The ${user.value} has the ${pass.value} as password`);
// })

// let div = document.querySelector("div");

// div.addEventListener("scroll",function() {
//     console.log("hello world")
// })

// let btn = document.createElement("button");
// btn.innerHTML = "Click me!";
// btn.addEventListener("click",function(){
//     this.style.backgroundColor = "green";
// })
// let h2 = document.createElement("h2");
// let inp = document.createElement("input");
// inp.setAttribute("placeholder","enter your name");
// inp.addEventListener("keypress",function(){
//     h2.innerText = this.value
// })
// let body = document.querySelector("body");
// body.appendChild(h2);
// body.appendChild(inp);
// inp.value = "hello";
// console.dir(inp)

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ull = document.querySelector("ul");

// let div = document.querySelector("div");
// let li = document.querySelector("li");

// div.addEventListener("click",function(){console.log("div is clicked")});
// ull.addEventListener("click",function(){console.log("ul is clicked")});
// li.addEventListener("click",function(event){
//     event.stopPropagation;
//     console.log("li is clicked")
// });


btn.addEventListener("click",addTask);

function addTask(){
    let ele = document.createElement("li");
    let btn = document.createElement("button");
    btn.setAttribute("class","delete");
    btn.innerText = "Delete";
    ele.innerText = inp.value;
    ull.appendChild(ele);
    ele.appendChild(btn);
    inp.value = "";
}

ull.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})
function btnTrigger(){
    let div = document.querySelector("div");
    const color = getRandomColor();
    div.style.backgroundColor = color;
    let h3 = document.querySelector("h3");
    h3.innerHTML = color;
}


function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}
function hello() {
    console.log("hello abhishek!");
}

function mouseEnter() {
    console.log("Jaldi waha se hato..");
}
function mouseLeave() {
    console.log("Accha kiya warna..");
}