document.getElementById("reverseBtn").addEventListener("click", () => {
  const input = document.getElementById("inputPara").value;
  const reversed = input.split("").reverse().join("");
  document.getElementById("output").textContent = reversed;
});
