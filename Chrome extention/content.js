// // content.js
// let contentLoaded = false;

// if (!window.contentLoaded) {
//   // do something
//   console.log("The window content.js has been loaded~!");
//   window.contentLoaded = true;
// }
// console.log(window.contentLoaded);

//document.addEventListener('DOMContentLoaded', () => {

//Document.addEventListener('click', (e)=> e.target)
//collect all of variable :D
/*
const elements = document.querySelectorAll('*');
const variableCollector = [];

for(let i = 0; i < elements.length; i++){
  console.log(elements[i]); 
}
*/

// for(let i = 0; i < elements.length; i++){
//   let anotherTestUnit = elements[i].getAttribute('data-variable');
//   if(anotherTestUnit){
//     variableCollector.push(elements[i]);
//   }
// }
 

// console.log(checkingIfItIsRGBColor("rgb(20, 30, 50)"));
// console.log(checkingIfItIsRGBColor("rgb(0, 30, 5, 2)"));

/*for(let item in window){
  variableCollector.push(item);
}
for(let item in this){
  variableCollector.push(item);
}*/
// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
document.addEventListener("mouseover", function (event) {
  varColor = getCssColor(event.target)
  let aaa = event.target;
  let ccc = window.getComputedStyle(aaa).getPropertyValue('color');
  // alert(ccc);
  // let bbb = window.getComputedStyle(aaa).getPropertyValue('background-color');
  // alert(bbb);
  console.log(checkingIfItIsRGBAColor(ccc));
  console.log(checkingIfItIsRGBColor(ccc));
  console.log(checkingIfItIsHexColor(ccc));
})

let varColor = "";

function getCssColor (input){
  let result = input.style.color;
  return result;
}



let rgbColor;
let rgbaColor;
let hexColor;

function whatColorIsIt(input){
  if (checkingIfItIsHexColor(input)){
    
  }
  else if (checkingIfItIsRGBAColor(input)){

  }
  else if (checkingIfItIsRGBColor(input)){

  }
}


function checkingIfItIsHexColor(input){
  if(/^#(([\dA-Fa-f]{3}){1,2}|([\dA-Fa-f]{4}){1,2})$/.test(input)){
    return true;
  }
}
function checkingIfItIsRGBAColor(input){
  if((/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d?\.?\d+)\)$/i).test(input)){
    return "it is RGBA";
  }
}
function checkingIfItIsRGBColor(input){
  if((/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i).test(input)){
    return "it is RGB";
  }
}



//~${}, 
// console.log(checkingIfItIsRGBAColor(rgba(255, 0, 0, 0.5)));



//////////Transfer the color from HEX color code to  RGBA code :D~~
//#8f0
function hexColorToRgbaColor(hexCode) {
  let colorArray = hexCode.substring(1).split(''); //get rid of first# and transfer it to array
  //8f0 ---> [f, 8, 0]
  let newColorArray = [];
  switch (colorArray.length){
    case 3:   //[ff, 88, 00]
      newColorArray.push(colorArray[0] + colorArray[0]);
      newColorArray.push(colorArray[1] + colorArray[1]);
      newColorArray.push(colorArray[2] + colorArray[2]);
      newColorArray.push("ff");
      break;
    case 4:
      newColorArray.push(colorArray[0] + colorArray[0]);
      newColorArray.push(colorArray[1] + colorArray[1]);
      newColorArray.push(colorArray[2] + colorArray[2]);
      newColorArray.push(colorArray[3] + colorArray[3]);
      break;
    case 6:
      newColorArray.push(colorArray[0] + colorArray[1]);
      newColorArray.push(colorArray[2] + colorArray[3]);
      newColorArray.push(colorArray[4] + colorArray[5]);
      newColorArray.push("ff");
      break;
    case 8:
      newColorArray.push(colorArray[0] + colorArray[1]);
      newColorArray.push(colorArray[2] + colorArray[3]);
      newColorArray.push(colorArray[4] + colorArray[5]);
      newColorArray.push(colorArray[6] + colorArray[7]);
      break;
    }

    //[ff, 88, 00]
    let str = newColorArray.map((eachChar) => parseInt(eachChar, 16).toString());
    str[3] = (Math.round((parseInt(str[3], 10)/255)*100)/100).toString();

    return `rgba(${str[0]}, ${str[1]}, ${str[2]}, ${str[3]})`;
  }
// action.onClick

const c1 = "#f80"
const c2 = "#f808"
const c3 = "#0088ff"
const c4 = "#0088ff88"
const c5 = "#9++36"
const c6 = "john"




// console.log(hexColorToRgbaColor(c1))   //  rgba(255, 136, 0, 1)
// console.log(hexColorToRgbaColor(c2))   //  rgba(255, 136, 0, 0.53125)
// console.log(hexColorToRgbaColor(c3))   //  rgba(0, 136, 255, 1)
// console.log(hexColorToRgbaColor(c4))   //  rgba(0, 136, 255, 0.53125)
// //console.log(hexColorToRgbaColor(c5))   //  Uncaught Error: Invalid HEX
// console.log(hexColorToRgbaColor(c6))   

// //console.log(hexToRGBA(c1, 0.5))   //  rgba(255, 136, 0, 0.5)
// //console.log(hexToRGBA(c3, 0.5))
