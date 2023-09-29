let url = "https://quote-garden.onrender.com/api/v3/quotes";

let quoArr = [];
getArr();
async function getArr(){
    let res = await axios.get(url);
    quoArr = res.data.data;
}


let btn = document.querySelector("button");
let quote = document.querySelector("h2");
let count = 0;

btn.addEventListener("click",async ()=>{
    if(count == quoArr.length){
        count = 0;
        quote.innerText = '"'+ quoArr[count].quoteText + '"';
    }
    quote.innerText = '"'+ quoArr[count].quoteText + '"';
    console.log(count);
    console.log(quoArr[count].quoteText);
    count++;
})