let addNumbers = document.querySelector("#sum-button");

addNumbers.addEventListener("click", () => {
  let num1 = document.querySelector("#num-1");
  let num2 = document.querySelector("#num-2");

  changeHtml(num1, num2);
  num1.value = "";
  num2.value = "";
  spanError.textContent = "";
});

const changeHtml = (num1, num2) => {
  let tdNum1 = document.querySelector(".tdNum-1");
  let tdPlus = document.querySelector(".tdPlus");
  let tdNum2 = document.querySelector(".tdNum-2");
  let tdEquals = document.querySelector(".tdEquals");
  let tdSum = document.querySelector(".tdSum");
  let spanError = document.querySelector("span");
  if (Number(num1.value) < 0 || Number(num2) < 0) {
    spanError.textContent = "Adicione um valor válido";
    return;
  }

  tdNum1.textContent = num1.value;
  tdPlus.textContent = "+";
  tdNum2.textContent = num2.value;
  tdEquals.textContent = "=";
  tdSum.textContent = Number(num1.value) + Number(num2.value);
  if (Number(num1.value) == 0 && Number(num2.value) != 0) {
    tdNum1.textContent = "0";
    tdSum.textContent = num2.value;
  } else if (Number(num2.value) == 0 && Number(num1.value) != 0) {
    tdNum2.textContent = "0";
    tdSum.textContent = num1.value;
  } else if (Number(num1.value) == 0 && Number(num2.value) == 0) {
    tdNum1.textContent = "0";
    tdNum2.textContent = "0";
    tdSum.textContent = "0";
  }
  spanError.textContent = "";
};
