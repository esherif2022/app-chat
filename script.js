const chatBox = document.getElementById("chat-box");
const toggleBtn = document.getElementById("toggle-chat");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");
const typingIndicator = document.getElementById("typing-indicator");
const themeToggle = document.getElementById("theme-toggle");

// Toggle chat visibility
toggleBtn.addEventListener("click", () => {
  chatBox.classList.toggle("show");
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

// Message submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = chatInput.value.trim();
  if (msg === "") return;

  addMessage("You", msg);
  chatInput.value = "";
  showTypingIndicator();

  setTimeout(() => {
    addMessage("Pidima AI", generateAIResponse(msg));
    hideTypingIndicator();
  }, 1200);
});

function addMessage(sender, text) {
  const message = document.createElement("div");
  message.className = "message";
  message.innerHTML = `<strong>${sender}:</strong> ${text}<span class="timestamp">${getTime()}</span>`;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function showTypingIndicator() {
  typingIndicator.style.display = "block";
}

function hideTypingIndicator() {
  typingIndicator.style.display = "none";
}

function generateAIResponse(msg) {
  return "Thanks for your message! I'm here to help you with Pidima's documentation tools.";
}
