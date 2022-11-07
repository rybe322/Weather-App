import _ from "lodash";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me";
  btn.onclick = printMe;

  element.appendChild(btn);

  const h1 = document.createElement("h1");
  h1.textContent = "New text";

  element.appendChild(h1);
  element.appendChild(h1);

  return element;
}

document.body.appendChild(component());
