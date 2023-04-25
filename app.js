let btn = document.querySelector("button");
let Code = document.querySelector(".color-code");
let box = document.querySelector(".box1");
let micro = document.querySelector("b");

let eyeDropper;
let newElem;
const eyedroperHandler = () => {
    eyeDropper = new EyeDropper();

    eyeDropper.open().then((result) => {
        Code.innerHTML = `Hex: ${result.sRGBHex}`;

        micro.classList.add("fa");
        micro.classList.add("fa-microphone");
        micro.style.color = result.sRGBHex;
    
        if(result.sRGBHex == "#ffffff") {
            Code.style.backgroundColor = "black";
            Code.style.color = result.sRGBHex;
            newElem.style.color = result.sRGBHex;
            newElem.style.backgroundColor = "black";
        } else {
            Code.style.color = result.sRGBHex;
            newElem.style.color = result.sRGBHex;
        }
        
        
        box.append(newElem);

    })
}

console.log(eyeDropper);

btn.addEventListener("click", eyedroperHandler);
box.addEventListener("click", () => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(Code.innerHTML));
})