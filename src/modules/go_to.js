export default function($elem = null, $time = 1000) {
  console.log($elem);

  let el = $elem ? $($elem) : this;
  window.scrollTo(0, el.cords().y);
  return this;
}
