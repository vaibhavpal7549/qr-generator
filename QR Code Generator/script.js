const btn = document.querySelector(".btn");
const qrImg = document.getElementById("qr-img");
const boxEle = document.getElementById("img-box");
const inputEle = document.getElementById("qr-text");

btn.addEventListener("click", ()=>{
    if(inputEle.value.length > 0){
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputEle.value}`
        boxEle.classList.add("show-img");
    }
    
})