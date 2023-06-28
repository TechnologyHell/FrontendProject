let title = document.querySelector('#title');
let text = title.textContent;
title.innerHTML = "";
 let len = text.length;
console.log(len);
let i = 0;
let  time = setInterval(jojo,100);

  function jojo(){
      {
        if(i<len){
          // title.innerHTML =  text[i]  ;
          title.innerHTML += "<span>" + text[i] + "</span>" ;
         console.log(text[i]);
         i = i+1;
        }
      }
      }
// let input = document.querySelector('.form_input');
// input.addEventListener("onclick", function(){
//   input.classList.add('start');
// })
