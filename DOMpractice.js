const container = document.querySelector(".container");
// the following would all work to call my "display" div:
//      div.display
//      .display
//      .container > .display
//      div.container > div.display

// relational selector:
const display = container.firstElementChild;
console.log(display);

const controls = document.querySelector(".controls")
const display2 = controls.previousElementSibling

// Properties and Methods to work with DOM in javascript:
// QUERY SELECTORS:
//  element.querySelector(selector) - returns a reference to
//                                      the first match of selector

const display3 = container.querySelector(".display");
console.log(display3);

const display4 = document.querySelectorAll(".display");
// console.log(display4, 4);

const p = document.createElement("p");
// to place this new div inside container I can do
// one of the following:
// appendChild adds it as the last node in the designated container
// container.appendChild(p);
// console.log(container);

// insertBefore allows us to place the node in front of another
// designated node within the container
container.insertBefore(p, controls);
console.log(container);

// container.removeChild(display);
// console.log(container);

// we can add text content to something
p.textContent = "Here's text that I'm adding to show I can."

// we can add CSS properties/styles

p.style.color = "blue"

// if I want to add multiple things at the same time, I
// can use .style.cssText:
controls.style.cssText = "color: darkgreen; background: blue";

p.setAttribute("style", "color: #FF69B4; background: yellow");

// if you are accessing a kebab case CSS property like
// background-color, you need to use either dot notation
// with camel case OR bracket notation as strings:
//  p.styles.backgroundColor = "green";
//  p.style["background-color"] = "green";
//  p.style["backgroundColor"] = "green";

p.setAttribute("class", "text");
// setAttribute will change a class that exists, or add a class if exists;
p.setAttribute("class", "paragraph");
// p,setAttribute("class", "text paragraph");

// p.getAttribute("class");
// console.log(p.getAttribute("class"));

p.removeAttribute("class");

// in part, because classes can frequently hold multiple
// values, and setAttribute rewrites the whole attribute,
// it is frequently better to use class specific methods:

p.classList.add("text");
console.log(p.getAttribute("class"));

p.classList.add("wrongClass");
console.log(p.getAttribute("class"));

p.classList.remove("wrongClass");
console.log(p.getAttribute("class"));

p.classList.toggle("inactive");
console.log(p.getAttribute("class"));


// method 2 of clickable button, keeps HTML page
// clear of javascript
// const btn = document.querySelector(".btn");
// btn.onclick = () => alert("Hello World");

// method 3 - Event Listener 
const btn = document.querySelector('.btn');
btn.addEventListener("click", () => {
    alert("Hello World!");
});

btn.addEventListener("cick", () => {
    btn.style.color = "red";
});

btn.addEventListener("click", function (e) {
    console.log(e.target);
    e.target.style.background = "blue";
});

// If you have a function that you want to execute
// when multiple kinds of events happen, then you should
// name the function

// If I want to attach event listeners to a lot of similar elements
// I can do so by applying arrays.

const buttons = document.querySelectorAll("button");

// .forEach is an array method that will apply the same instructions
//  to each item in the array:

buttons.forEach((button) => {
    // add a click event listener
    button.addEventListener("click", () => {
        alert(button.className);
    });
});

const two = document.querySelector(".two");

two.addEventListener("click", () =>{
    two.style.coor = "green";
});

// mousedown -fires when you press the mouse button on an element
// mouseup -fires when you release the mouse button on an element
// click - fires when on mousedown and one mouseup detected on the
//              same element

const three = document.querySelector(".three");

three.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

three.addEventListener('mouseover', (e) => {
    // console.log(e.button);
    if (e.shiftKey){
        console.log("shift");
    }
});


let track = document.querySelector('.track');
track.addEventListener('mousemove', (e) => {
    let log = document.querySelector('.log');
    log.innerText = `
    Screen X/Y: (${e.screenX}, ${e.screenY})
    Client X/Y: (${e.clientX}, ${e.clientY})`
});


// Better Approach - event bubbling

let menu = document.querySelector('#menu');

document.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id){
        case 'home' :
            console.log("Home menu item selected");
            break;
        case 'dashboard' :
            console.log("Dashboard item clicked");
            break;
        case 'report':
            console.log("Report menu item clicked");
    }
})


// CUSTOM EVENTS:

// function highlight(elem) {
//     elem.style.backgroundColor = 'yellow';
// }

// next we use a callback. A callback is a function
// that is the input of another function

function highlight(elem, callback) {
    elem.style.backgroundColor = 'yellow';

    if(callback && typeof callback === 'function') {
        callback(elem);
    }
}

let menuItem = document.querySelector('.menuItem');
function addBorder(elem){
    elem.style.border = "soil 1px red";
}

highlight(menuItem, addBorder);


// let event = new CustomEvent(eventType, options);
//      eventType: name of new event
//      options has the "detail" property that contains
//              any custom information about the event

let event = new CustomEvent('mark', {
    detail: {backgroundColor: 'yellow'}
});

function highlight2(elem) {
    elem.style.backgroundColor = 'yellow';

    let event = new CustomEvent('mark', {
        detail: {backgroundColor: 'yellow'}
    });

    elem.dispatchEvent(event);
}