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
// console.llog(container);

// we can add text content to something
p.textContent = "Here's text that I'm adding to show I can."

// we can add CSS properties/styles

p.style.color = "blue"

// if I want to add multiple things at the same time, I
// can use .style.cssText:
controls.style.cssText = "color: darkgreen; background: blue";

