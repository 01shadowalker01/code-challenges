const container = document.querySelector("#container");
const numberInput = document.querySelector("#number");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
  generateTriangle(numberInput.value);
});

function generateTriangle(count) {
  deleteChildren(container);
  let rowList = [];
  for (let i = 1; i <= Math.pow(2, count); i++) {
    const row = createRow();
    for (let j = 0; j < i; j++) {
      let className = "active";
      if (i > 1 && i < Math.pow(2, count)) {
        if (j !== 0 && j != i - 1) {
          className = "";
        }
      }
      const block = createBlock(className);
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

function createBlock(className) {
  const div = document.createElement("div");
  div.classList = "block " + (className || "");
  return div;
}

function deleteChildren(el) {
  var child = el.lastElementChild;
  while (child) {
    el.removeChild(child);
    child = el.lastElementChild;
  }
}
