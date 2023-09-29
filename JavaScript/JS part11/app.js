h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5);
            if(num>3){
                reject("weak connection");
            }
            h1.style.color = color;
            console.log("color changed" , color);
            resolve("Color changed");
        },delay);
    })
}

async function demo(){
    try{
        await changeColor("red",1000);
        await changeColor("purple",1000);
        await changeColor("yellow",1000);
        await changeColor("green",1000);
    } catch(err){
        console.log(err);
    }
    

    let a =5;
    console.log(a);
    console.log('num is',a+3);
}

demo();

// changeColor("red",1000).then(()=>{
//     return changeColor("yellow",1000)
// })
// .then(()=>{
//     return changeColor("purple",1000)
// })
// .catch(()=>{
//     console.log("color not changed");
// })

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("blue",1000);
//         })
//     })
// })

// function saveToDB(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed >= 4){
//         success();
//     }else{
//         failure();
//     }
// }

// saveToDB("abhishek",()=>{
//     console.log("Success: data was saved");
//     saveToDB("apna college",()=>{
//         console.log("Success2. data saved");
//     },()=>{
//         console.log("failure2. weak  connections");
//     })
// },()=>{
//     console.log("Failure: Data was not saved");
// })

// function saveToDB(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed >= 4){
//             resolve("data saved");
//         }else{
//             reject("weak connection");

//         }
//     });
// }

// saveToDB("abhishek").then((result)=>{
//     console.log("result is",result);
//     return saveToDB("GLAU");
//     })
//     .then((result)=>{
//         console.log("result ",result);
//         return saveToDB("Gla university");
//     })
//     .then((result)=>{
//         console.log("data 3 saved" ,result);
//     })
//     .catch((error)=>{
//         console.log("promise rejected.",error);
//     })