const init = () => {
  const operations = ["add", "subtract", "multiply", "divide", "modulo"];

  // Loop through all operators
  operations.forEach(operation => {
    // Get the input fields for the operator
    const input = [
      document.querySelector(`#${operation}_1`),
      document.querySelector(`#${operation}_2`)
    ];

    // Get the result field for the operator
    const result = document.querySelector(`#${operation}_result`);

    //remove placeholder on input focus from result field
    for (let i = 0; i < input.length; i++) {
      input[i].addEventListener("focus", function() {
        result.value = "";
      });
    }

    // Add an event listener for the input fields, to update the calculation, when
    // one of them changes to a new value.
    input.forEach(field => {
      // cleanup the value of the selected field on focus
      field.addEventListener("focus", e => {
        e.target.value = "";
      });
      // calculate
      field.addEventListener("keyup", e => {
        result.value = calculate(
          operation,
          Number(input[0].value),
          Number(input[1].value)
        );
      });
    });
  });
};

/**
 * Returns the result of a mathematical calculation, based on the given
 * operation (add, subtract, multiply, divide, modulo).
 *
 * Examples:
 * calculate("add", 5, 10)       =>  5 + 10 = 15
 * calculate("divide", 100, 20)  =>  100 / 20 = 5
 *
 * @param  {string} operation
 * @param  {number} first       The left value of the operation
 * @param  {number} second      The right value of the operation
 * @return {number}
 */

calculate = (operation, first, second) => {
  switch (operation) {
    case "add":
      return first + second;

    case "subtract":
      return first - second;

    case "multiply":
      return first * second;

    case "divide":
      if (first > 0 && second > 0) {
        return first / second;
      } else {
        return 0;
      }

    case "modulo":
      if (first > 0 && second > 0 && first >= second) {
        return first % second;
      } else {
        return 0;
      }

    default:
      return 0;
  }
};
// the load function is fired when the entire page loads, including its content (images, CSS, scripts, etc.).
window.addEventListener("load", init);
