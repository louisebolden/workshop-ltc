window.addEventListener("load", () => {
  const form = document.querySelector(".sum-form");
  const inputs = form.querySelectorAll("input[type='number']");
  const answer = document.querySelector(".answer");
  const errorMsg = document.querySelector(".error");

  form.addEventListener("submit", event => {
    answer.innerText = '';
    errorMsg.innerText = '';

    const result = fancySum(inputs);

    if (isNaN(result)) {
      errorMsg.innerText = 'Could not parse those input values :('
    } else {
      answer.innerText = result;
    }

    event.preventDefault();
  });
});

function fancySum(inputs) {
  return [...inputs]
    .map(input => parseInt(input.value))
    .reduce((accumulator, value) => accumulator + value);
}

export { fancySum };
