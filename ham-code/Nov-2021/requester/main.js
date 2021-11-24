const urlsInput = document.querySelector("#urls");
const btn = document.querySelector("#send-requests");
const results = document.querySelector("#results");

btn.addEventListener("click", async () => {
  if (urlsInput.value) {
    urlsInput.value = urlsInput.value.trim();
    const urlList = urlsInput.value.split(/\s+/);
    deleteChildren();
    await sendRequests(urlList);
  }
});

async function sendRequests(urlList) {
  for (let i = 0; i < urlList.length; i++) {
    try {
      const response = await (await fetch(urlList[i])).json();
      showResponse(JSON.stringify(response));
    } catch (error) {
      showResponse("error");
    }
  }
}

function showResponse(response) {
  const div = document.createElement("div");
  div.classList = "result";
  div.innerHTML = response;
  results.appendChild(div);
}

function deleteChildren() {
  var child = results.lastElementChild;
  while (child) {
    results.removeChild(child);
    child = results.lastElementChild;
  }
}

// "https://jsonplaceholder.typicode.com/todos/1"
