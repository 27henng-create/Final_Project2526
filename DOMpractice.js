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