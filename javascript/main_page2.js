const item_list = document.getElementsByClassName("item");
let list_no = 0;
for (let i = 0; i < item_list.length; i++) {
    item_list[i].style = "display: none";
}

let list_next = document.getElementById('next');
list_display(list_no, list_no + 1, list_no + 2);
function list_display(a, b, c) {
    for (let i = 0; i < item_list.length; i++) {
        item_list[i].style = "display: none";
    }
    item_list[a].style = "display: block";
    item_list[b].style.display = "block";
    item_list[c].style.display = "block";
}

function list_hide(i) {
    item_list[i].style = "display: none";
}

let item_timer = setInterval(list_up, 10000);


list_next.addEventListener("click", function list_up() {
    if ((list_no + 3) == item_list.length) {
        for (let i = 0; i < item_list.length; i++) {
            item_list[i].style = "display: none";
        }
        list_no = 0;
        list_display(list_no, list_no + 1, list_no + 2);
    }
    else {
        list_hide(list_no);
        list_no++;
        list_display(list_no, list_no + 1, list_no + 2);

    }
    clearTimeout(item_timer);
    item_timer = setInterval(list_up, 10000);
})



function list_up() {
    if ((list_no + 3) == item_list.length) {
        for (let i = 0; i < item_list.length; i++) {
            item_list[i].style = "display: none";
        }
        list_no = 0;
        list_display(list_no, list_no + 1, list_no + 2);
    }
    else {
        list_hide(list_no);
        list_no++;
        list_display(list_no, list_no + 1, list_no + 2);

    }
}

let list_prev = document.getElementById('prev');

list_prev.addEventListener('click', function list_down() {
    if ((list_no) == 0) {
        for (let i = 0; i < item_list.length; i++) {
            item_list[i].style = "display: none";
            list_hide(i);
        }
        list_no = item_list.length-3 ;
        list_display(list_no, list_no + 1, list_no + 2);

    }
    else {
        // list_hide(list_no);
        list_no--;
        list_display(list_no, list_no + 1, list_no + 2);



    }
    clearTimeout(item_timer);
    item_timer = setInterval(list_up, 10000);
});





const context = document.getElementsByClassName("context");
let nextcontext = document.getElementById('next-context');
let prevcontext = document.getElementById('prev-context');


let contextno = 0;
for (let i = 0; i < context.length; i++) {
    context[i].style = "display: none";
}

displaycontext(contextno, contextno + 1, contextno + 2);


nextcontext.addEventListener('click', function upcontext() {
    if ((contextno + 3) == context.length) {
        for (let i = 0; i < context.length; i++) {
            context[i].style = "display: none";
        }
        contextno = 0;
        displaycontext(contextno, contextno + 1, contextno + 2);
    }
    else {
        hidecontext(contextno);
        contextno++;
        displaycontext(contextno, contextno + 1, contextno + 2);


    }
    clearTimeout(context_timer)
    let context_timer = setInterval(movedown,10000);
});
function hidecontext(i) {
    context[i].style = "display: none";
}

function displaycontext(a, b, c) {
    context[a].style = "display: block";
    context[b].style.display = "block";
    context[c].style.display = "block";
}


prevcontext.addEventListener('click', function movedown() {
    if ((contextno) == 0) {
        for (let i = 0; i < context.length; i++) {
            context[i].style = "display: none";
        }
        contextno = context.length - 3;
        displaycontext(contextno, contextno + 1, contextno + 2);
       
    }
    else {
        hidecontext(contextno+2);
        contextno--;
        displaycontext(contextno, contextno + 1, contextno + 2);


    }
    clearTimeout(context_timer)
let context_timer = setInterval(movedown,10000);

});
function movedown() {
    if ((contextno) == 0) {
        for (let i = 0; i < context.length; i++) {
            context[i].style = "display: none";
        }
        contextno = context.length - 3;
        displaycontext(contextno, contextno + 1, contextno + 2);
       
    }
    else {
        hidecontext(contextno+2);
        contextno--;
        displaycontext(contextno, contextno + 1, contextno + 2);


    }
}
let context_timer = setInterval(movedown,10000);






const item_list2 = document.getElementsByClassName("item2");
let list_no2 = 0;
for (let i = 0; i < item_list2.length; i++) {
    item_list2[i].style = "display: none";
}

let list_next2 = document.getElementById('next2');
list_display2(list_no2, list_no2 + 1, list_no2 + 2);
function list_display2(a, b, c) {
    for (let i = 0; i < item_list2.length; i++) {
        item_list2[i].style = "display: none";
    }
    item_list2[a].style = "display: block";
    item_list2[b].style.display = "block";
    item_list2[c].style.display = "block";
}

function list_hide2(i) {
    item_list2[i].style = "display: none";
}

let item_timer2 = setInterval(list_up2, 5000);


list_next2.addEventListener("click", function list_up2() {
    if ((list_no2 + 3) == item_list2.length) {
        for (let i = 0; i < item_list2.length; i++) {
            item_list2[i].style = "display: none";
        }
        list_no2 = 0;
        list_display2(list_no2, list_no2 + 1, list_no2 + 2);
    }
    else {
        list_hide2(list_no2);
        list_no2++;
        list_display2(list_no2, list_no2 + 1, list_no2 + 2);

    }
    clearTimeout(item_timer2);
    item_timer2 = setInterval(list_up2, 5000);
})



function list_up2() {
    if ((list_no2 + 3) == item_list2.length) {
        for (let i = 0; i < item_list2.length; i++) {
            item_list2[i].style = "display: none";
        }
        list_no2 = 0;
        list_display2(list_no2, list_no2 + 1, list_no2 + 2);
    }
    else {
        list_hide2(list_no2);
        list_no2++;
        list_display2(list_no2, list_no2 + 1, list_no2 + 2);

    }
}

let list_prev2 = document.getElementById('prev2');

list_prev2.addEventListener('click', function list_down() {
    if ((list_no2) == 0) {
        for (let i = 0; i < item_list2.length; i++) {
            item_list2[i].style = "display: none";
            list_hide2(i);
        }
        list_no2 = item_list2.length-3 ;
        list_display2(list_no2, list_no2 + 1, list_no2 + 2);

    }
    else {
        // list_hide2(list_no2);
        list_no2--;
        list_display2(list_no2, list_no2 + 1, list_no2 + 2);



    }
    clearTimeout(item_timer2);
    item_timer2 = setInterval(list_up2, 5000);
});











const context2 = document.getElementsByClassName("context2");
let nextcontext2 = document.getElementById('next-context2');
let prevcontext2 = document.getElementById('prev-context2');


let contextno2 = 0;
for (let i = 0; i < context2.length; i++) {
    context2[i].style = "display: none";
}

displaycontext2(contextno2, contextno2 + 1, contextno2 + 2);


nextcontext2.addEventListener('click', function upcontext2() {
    if ((contextno2 + 3) == context2.length) {
        for (let i = 0; i < context2.length; i++) {
            context2[i].style = "display: none";
        }
        contextno2 = 0;
        displaycontext2(contextno2, contextno2 + 1, contextno2 + 2);
    }
    else {
        hidecontext2(contextno2);
        contextno2++;
        displaycontext2(contextno2, contextno2 + 1, contextno2 + 2);


    }
    clearTimeout(context_timer2)
    let context_timer2 = setInterval(movedown2,4000);
});
function hidecontext2(i) {
    context2[i].style = "display: none";
}

function displaycontext2(a, b, c) {
    context2[a].style = "display: block";
    context2[b].style.display = "block";
    context2[c].style.display = "block";
}


prevcontext2.addEventListener('click', function movedown2() {
    if ((contextno2) == 0) {
        for (let i = 0; i < context2.length; i++) {
            context2[i].style = "display: none";
        }
        contextno2 = context2.length - 3;
        displaycontext2(contextno2, contextno2 + 1, contextno2 + 2);
       
    }
    else {
        hidecontext2(contextno2+2);
        contextno2--;
        displaycontext2(contextno2, contextno2 + 1, contextno2 + 2);


    }
    clearTimeout(context_timer2)
let context_timer2 = setInterval(movedown2,4000);

});
function movedown2() {
    if ((contextno2) == 0) {
        for (let i = 0; i < context2.length; i++) {
            context2[i].style = "display: none";
        }
        contextno2 = context2.length - 3;
        displaycontext2(contextno2, contextno2 + 1, contextno2 + 2);
       
    }
    else {
        hidecontext2(contextno2+2);
        contextno2--;
        displaycontext2(contextno2, contextno2 + 1, contextno2 + 2);


    }
}
let context_timer2 = setInterval(movedown2,4000);


















