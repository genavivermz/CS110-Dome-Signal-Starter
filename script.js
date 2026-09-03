const signalButton = document.querySelector("#signal-button");
const domeStatus = document.querySelector("#dome-status");

// Add a click event listener to update the dome status
signalButton.addEventListener("click", () => {
  domeStatus.textContent = "Kairova status: online";
});