"use strict";

let boxes = document.getElementById("boxes")
let noOfBoxes = document.getElementById("noOfBoxes")
noOfBoxes.addEventListener("input", generateBoxes)

function generateBoxes(e){
    boxes.innerHTML = "";
}
    for (let i=0;i<e.target.value;i++){
        let box=document.createElement("div")
    }
    
        boxes.appendChild(box)
       
     function getRandomColor() {
        let letters = "0123456789ABCDEF"
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]

        }
        return color
     } 

    
          
         

    
