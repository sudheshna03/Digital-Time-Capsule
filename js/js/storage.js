const container = document.getElementById("memoryList");
const memories = JSON.parse(localStorage.getItem("memories")) || [];
const today = new Date();

memories.forEach(memory => {
  if (new Date(memory.unlockDate) <= today) {
    const div = document.createElement("div");
    div.textContent = memory.text;
    container.appendChild(div);
  }
});
