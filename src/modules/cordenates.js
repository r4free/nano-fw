export default function($elem = null) {
  let cords = $elem
    ? $($elem).getBoundingClientRect()
    : this.getBoundingClientRect();
  return cords;
}
