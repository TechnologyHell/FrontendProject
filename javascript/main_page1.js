/*
const pricing_basic = document.querySelector('.basic_pricing');
pricing_basic.addEventListener("mouseover", function display_basic(){
    let pricing_basic_features = document.querySelector('.details_basic').style.display = "block";
    let pricing_box = document.querySelector('.pricing_box1').style.height = "60vh";
    document.querySelector('.b_hover').style.display = "none";
    document.querySelector('.partner').style.top= "180vh";
    document.querySelector('#pricing').style.height = "90vh";

});
pricing_basic.addEventListener("mouseout", function display_basic(){
    let pricing_basic_features = document.querySelector('.details_basic').style.display = "none";
    let pricing_box = document.querySelector('.pricing_box1').style.height = "30vh";
    document.querySelector('.b_hover').style.display = "block";
    document.querySelector('.partner').style.top= "130vh";
    document.querySelector('#pricing').style.height = "50vh";


});


const pricing_basic2 = document.querySelector('.beginner_price');
pricing_basic2.addEventListener("mouseover", function display_basic(){
    let pricing_basic_features = document.querySelector('.details_beginner').style.display = "block";
    let pricing_box = document.querySelector('.pricing_box2').style.height = "80vh";
    document.querySelector('.bg_hover').style.display = "none";
    document.querySelector('.partner').style.top= "210vh";
    document.querySelector('#pricing').style.height = "110vh";


});
pricing_basic2.addEventListener("mouseout", function display_basic(){
    let pricing_basic_features = document.querySelector('.details_beginner').style.display = "none";
    let pricing_box = document.querySelector('.pricing_box2').style.height = "30vh";
    document.querySelector('.bg_hover').style.display = "block";
    document.querySelector('.partner').style.top= "130vh";
    document.querySelector('#pricing').style.height = "50vh";

});



const pricing_basic3 = document.querySelector('.stander_pricing');
pricing_basic3.addEventListener("mouseover", function display_basic(){
    let pricing_basic_features = document.querySelector('.details_standerd').style.display = "block";
    let pricing_box = document.querySelector('.pricing_box3').style.height = "80vh";
    document.querySelector('.s_hover').style.display = "none";
    document.querySelector('.partner').style.top= "210vh";
    document.querySelector('#pricing').style.height = "110vh";


});
pricing_basic3.addEventListener("mouseout", function display_basic(){
    let pricing_basic_features = document.querySelector('.details_standerd').style.display = "none";
    let pricing_box = document.querySelector('.pricing_box3').style.height = "30vh";
    document.querySelector('.s_hover').style.display = "block";
    document.querySelector('.partner').style.top= "130vh";
    document.querySelector('#pricing').style.height = "50vh";

});

*/


const dots = document.getElementsByClassName("dot");
const list = document.getElementsByClassName("image");
let displayno = 0;
let dotsno = 0;
for (let i = 0; i < list.length; i++) {
    list[i].style = "display: none";
}

let next = document.getElementById('backward');


display(displayno);

function display(a) {
    for (let i = 0; i < list.length; i++) {
        list[i].style = "display: none";
    dots[i].classList.replace("selected","circle");

    }
    list[a].style = "display: block";
    dots[a].classList.replace("circle","selected");
}

function hide(i) {
    for (let i = 0; i < list.length; i++) {
        list[i].style = "display: none";
    dots[i].classList.replace("selected","circle");

    }
    list[i].style = "display: none";
    dots[i].classList.replace("selected","circle");
}

let timer = setInterval(moveup, 5000);

next.addEventListener('click', function moveup() {
    if ((displayno ) == list.length-1) {
       
        hide(displayno);
        displayno = 0;
        display(displayno);
    }
    else {
        hide(displayno);
        displayno++;
        display(displayno);
    }
    clearTimeout(timer);
    timer = setInterval(moveup, 5000);
});



function moveup() {
    if ((displayno ) == list.length-1) {
        for (let i = 0; i < list.length; i++) {
            list[i].style = "display: none";
        }
        hide(displayno);
        displayno = 0;
        display(displayno);
    }
    else {
        hide(displayno);
        displayno++;
        display(displayno);

    }
}

let prev = document.getElementById('forward');

prev.addEventListener('click', function movedown() {
    if ((displayno) == 0) {
        for (let i = 0; i < list.length; i++) {
            list[i].style = "display: none";
        }
        hide(displayno);
        displayno = list.length-1 ;
        display(displayno);
    }
    else {
        hide(displayno);
        displayno--;
        display(displayno);

    }
    clearTimeout(timer);
    timer = setInterval(moveup, 5000);
});

let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let slide4 = document.getElementById('slide4');
let slide5 = document.getElementById('slide5');
slide1.addEventListener("click", function(){
    for (let i = 0; i < list.length; i++) {
        hide(i);
    }
    display(0);
    displayno=0;

})
slide2.addEventListener("click", function(){
    for (let i = 0; i < list.length; i++) {
        hide(i);
    }
    display(1);
    displayno=1;
})
slide3.addEventListener("click", function(){
    for (let i = 0; i < list.length; i++) {
        hide(i);
    }
    display(2);
    displayno=2;
})
slide4.addEventListener("click", function(){
    for (let i = 0; i < list.length; i++) {
        hide(i);
    }
    display(3);
    displayno=3;
})
slide5.addEventListener("click", function(){
    for (let i = 0; i < list.length; i++) {
        hide(i);
    }
    display(4);
    displayno=4;
})
































