import app from "./app";
import dataGoTo from "./plugins/data-goto";

window.$ = function($param = null) {
  let el = $param ? document.querySelector($param) : document;
  for (let n in app) {
    el[n] = app[n];
  }

  return el;
};

(function() {
  dataGoTo();
})();
