const container = document.querySelector("#container");
const numberInput = document.querySelector("#number");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
  generateTriangle(numberInput.value);
});

function generateTriangle(count) {
  let rowList = [];
  for (let i = 2; i <= Math.pow(2, count); i++) {
    const row = createRow();
    for (let j = 0; j < i; j++) {
      const block = createBlock();
      row.appendChild(block);
    }
    rowList.push(row);
  }
  rowList.forEach((row) => {
    container.appendChild(row);
  });
}

function createRow() {
  const row = document.createElement("div");
  row.classList = "row";
  return row;
}

function createBlock() {
  const div = document.createElement("div");
  div.classList = "block active";
  return div;
}
