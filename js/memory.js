function saveMemory() {
  const text = document.getElementById("memoryText").value;
  const unlockDate = document.getElementById("unlockDate").value;

  if (!text || !unlockDate) {
    alert("Please fill all fields");
    return;
  }

  const memory = {
    text,
    unlockDate,
    createdAt: new Date().toISOString()
  };

  let memories = JSON.parse(localStorage.getItem("memories")) || [];
  memories.push(memory);
  localStorage.setItem("memories", JSON.stringify(memories));

  alert("Memory saved successfully!");
}
