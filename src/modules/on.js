export default function(event, callback) {
  if (typeof event === "string") {
    this.addEventListener(event, callback);
  } else {
    event.forEach(e => {
      this.addEventListener(e, callback);
    });
  }
  return this;
}
