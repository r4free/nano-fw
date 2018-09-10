/**
 * set a new class to the element
 * @param {string} $class
 */
export default function($class) {
  this.className =
    `${$class} ` +
    this.className
      .split(" ")
      .map(c => {
        try {
          if (c == $class) throw new Error();
          return c;
        } catch (error) {
          console.error(`class ${$class} already exists on element `);
        }
      })
      .join(" ");

  return this;
}
