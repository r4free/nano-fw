export default function() {
  $("[data-goto]").on("click", function(e) {
    e.preventDefault();
    this.goTo(this.dataset.goto);
  });
}
