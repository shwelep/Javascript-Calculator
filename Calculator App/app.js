

// JavaScript
// const display = document.querySelector("#display");
// console.log(display);
// const buttons = document.querySelectorAll("button");

// buttons.forEach(item => {
//   item.onclick = () => {
//     if(item.id === "clear") {
//       display.innerText = '';
//     } else if (item.id === "backspace") {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length -1);
//     } else if (display.innerText !== '' && item.id === 'equal') {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText === '' && item.id === 'equal') {
//       display.innerText = 'Empty!';
//       setTimeout(() => (display.innerText=''), 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   }
// });


// const display = document.querySelector(".display-screen");
// console.log(display);
// const buttons = document.querySelectorAll("button");

// buttons.forEach(item => {
//   item.onclick = () => {
//     if(item.id === "clear") {
//       display.innerText = '';
//     } else if (item.id === "backspace") {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length -1);
//     } else if (display.innerText !== '' && item.id === 'equal') {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText === '' && item.id === 'equal') {
//       display.innerText = 'Empty!';
//       setTimeout(() => (display.innerText=''), 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   }
// });

// const display = document.querySelector(".display-screen");
// const buttons = document.querySelectorAll("button");

// buttons.forEach(function(item) {
//   item.onclick = function() {
//     if(item.id === "clear") {
//       display.innerText = '';
//     } else if (item.id === "backspace") {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length -1);
//     } else if (display.innerText !== '' && item.id === 'equal') {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText === '' && item.id === 'equal') {
//       display.innerText = 'Empty!';
//       setTimeout(function() {
//         display.innerText='';
//       }, 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   }
// });

const display = document.querySelector(".display-screen");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.onclick = () =>{
        const id = button.id;
        if(id === "clear"){
            display.innerText = '';
        } else if (id === "backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length -1);
        } else if (display.innerText !== '' && id === 'equal'){
            display.innerText = eval(display.innerText);
        } else if (display.innerText === '' && id === 'equal'){
            display.innerText = 'Empty!';
            setTimeout(()=> (display.innerText=''), 2000);
        } else {
            display.innerText += id;
        }
    }
})



// const display = document.querySelector(".display-screen");
// const buttons = document.querySelectorAll("button");

// buttons.forEach(item => {
//   item.onclick = () => {
//     if(item.id === "clear") {
//       display.innerText = '';
//     } else if (item.id === "backspace") {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length -1);
//     } else if (display.innerText !== '' && item.id === 'equal') {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText === '' && item.id === 'equal') {
//       display.innerText = 'Empty!';
//       setTimeout(() => (display.innerText=''), 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   }
// });


// buttons.array.forEach(element => {
//     ItemContentType.onclick = () =>{
//         if(item.id == clear){
//             display.innerText = '';
//         } else if (item.id == "backspace"){
//             let string = display.innerText.toString();
//             display.innerText = string.substr(0, string.length -1);
//         } else if (display.innerText != '' && item.id == 'equal'){
//             display.innerText = eval(display.innerText);
//         } else if (display.innerText = '' && item.id == 'equal'){
//             display.innerText = 'Empty!';
//             setTimeout(()=> (display.innerText=''), 2000);
//         } else {
//             display.innerText += item.id;

//         }

//     }
// })

// const display = document.querySelector(".display-screen");
// const buttons = document.querySelectorAll("button");

// buttons.forEach(item => {
//   item.onclick = () => {
//     if(item.id === "clear") {
//       display.innerText = '';
//     } else if (item.id === "backspace") {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length -1);
//     } else if (display.innerText !== '' && item.id === 'equal') {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText === '' && item.id === 'equal') {
//       display.innerText = 'Empty!';
//       setTimeout(() => (display.innerText=''), 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   }
// });





// const themeToggleBtn = document.querySelector('.theme-toggler');
// const calculator = document.querySelector('.calculator');
// let isDark = true;
// themeToggleBtn.onclick = () =>{
//     calculator.classList.toggle('dark');
//     themeToggleBtn.classList.toggle('active');
//     isDark = !isDark
// }








const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
let isDark = true;
themeToggleBtn.onclick = () =>{
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark
}
