let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.innerText = color;
            resolve("color changed");
        },delay);
    });
}

// changeColor("orange",1000)
//     .then(()=>{
//         return changeColor("blue",1000);
//     })
//     .then(()=>{
//         return changeColor("green",1000);
//     });

async function colorChanger(){
    await changeColor("red",1000);
    await changeColor("blue",1000);
    changeColor("green",1000);
}
colorChanger();
// function changeColor(color,delay,nextColor){
//     setInterval(()=>{
//         h1.style.color = color;
//         if(nextColor) nextColor();
//     },delay)
// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("blue",1000)
//     })
// })

// function savetodb(data){
//     return new Promise((resolve,reject)=>{
//         let rand = Math.floor(Math.random()*10) +1;
//         if(rand>4){
//             resolve("data saved successfully");
//         }else{
//             reject("Weak connection : rejected");
//         }
//     })   
// }

// savetodb("data").then(()=>{
//     console.log("data 1 saved");
//     return savetodb("data2");
// }).then(()=>{
//     console.log("data 2 saved");
// }).catch(()=>{
//     console.log("not saved error");
// })