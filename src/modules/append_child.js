export default function(el, content) {
  let e = document.createElement(el);
  e.appendChild(document.createTextNode(content));
  this.appendChild(e);
  return this;
}
