// Interactive Chat Widget for n8n
(function () {
  if (window.N8nChatWidgetLoaded) return;
  window.N8nChatWidgetLoaded = true;

  // Load font
  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap";
  document.head.appendChild(font);

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
    .chat-assist-widget {
      --chat-color-bg: #0f0f0f;
      --chat-color-primary: #10b981;
      --chat-color-secondary: #059669;
      --chat-color-light: #1e1e1e;
      --chat-color-text: #ffffff;
      --chat-color-subtle: #94a3b8;
      --chat-radius: 12px;
      --chat-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
      font-family: 'Inter', sans-serif;
    }

    .chat-assist-widget .chat-window {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 360px;
      height: 560px;
      background: var(--chat-color-bg);
      color: var(--chat-color-text);
      border-radius: var(--chat-radius);
      box-shadow: var(--chat-shadow);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      z-index: 9999;
      opacity: 0;
      transform: scale(0.95);
      transition: all 0.3s ease;
    }

    .chat-assist-widget .chat-window.visible {
      opacity: 1;
      transform: scale(1);
    }

    .chat-assist-widget .chat-header {
      background: #000;
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid #1e1e1e;
    }

    .chat-assist-widget .chat-header-logo {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: white;
      object-fit: contain;
    }

    .chat-assist-widget .chat-header-title {
      font-size: 16px;
      font-weight: 600;
      color: white;
    }

    .chat-assist-widget .chat-close-btn {
      margin-left: auto;
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }

    .chat-assist-widget .chat-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: var(--chat-color-light);
    }

    .chat-assist-widget .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .chat-assist-widget .chat-bubble {
      padding: 12px 16px;
      border-radius: var(--chat-radius);
      max-width: 80%;
      font-size: 14px;
      line-height: 1.5;
    }

    .chat-assist-widget .chat-bubble.user {
      align-self: flex-end;
      background: var(--chat-color-primary);
      color: white;
    }

    .chat-assist-widget .chat-bubble.bot {
      align-self: flex-start;
      background: #1e1e1e;
      color: var(--chat-color-text);
      border: 1px solid #2e2e2e;
    }

    .chat-assist-widget .chat-controls {
      display: flex;
      padding: 12px;
      border-top: 1px solid #2e2e2e;
      background: #000;
    }

    .chat-assist-widget .chat-textarea {
      flex: 1;
      padding: 12px;
      border-radius: var(--chat-radius);
      border: 1px solid #333;
      background: #111;
      color: white;
      resize: none;
      font-size: 14px;
    }

    .chat-assist-widget .chat-submit {
      background: var(--chat-color-primary);
      border: none;
      color: white;
      margin-left: 8px;
      border-radius: var(--chat-radius);
      padding: 0 16px;
      font-size: 16px;
      cursor: pointer;
    }

    .chat-assist-widget .chat-launcher {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--chat-color-primary);
      color: white;
      padding: 12px 18px;
      border-radius: var(--chat-radius);
      box-shadow: var(--chat-shadow);
      border: none;
      font-weight: 600;
      cursor: pointer;
      z-index: 9999;
    }
  `;
  document.head.appendChild(style);

  // Create widget
  const container = document.createElement("div");
  container.className = "chat-assist-widget";

  const chatWindow = document.createElement("div");
  chatWindow.className = "chat-window";

  chatWindow.innerHTML = `
    <div class="chat-header">
      <img class="chat-header-logo" src="https://vistflow.com/wp-content/uploads/2025/03/VistLogo100-2.png" alt="logo">
      <div class="chat-header-title">VistFlow</div>
      <button class="chat-close-btn">×</button>
    </div>
    <div class="chat-body">
      <div class="chat-messages"></div>
      <div class="chat-controls">
        <textarea class="chat-textarea" placeholder="Type your message..."></textarea>
        <button class="chat-submit">Send</button>
      </div>
    </div>
  `;

  const toggleBtn = document.createElement("button");
  toggleBtn.className = "chat-launcher";
  toggleBtn.textContent = "Need help?";

  container.appendChild(chatWindow);
  container.appendChild(toggleBtn);
  document.body.appendChild(container);

  const toggleVisibility = () => {
    chatWindow.classList.toggle("visible");
  };

  toggleBtn.addEventListener("click", toggleVisibility);
  chatWindow.querySelector(".chat-close-btn").addEventListener("click", toggleVisibility);

  const sendBtn = chatWindow.querySelector(".chat-submit");
  const input = chatWindow.querySelector(".chat-textarea");
  const messages = chatWindow.querySelector(".chat-messages");

  function addMessage(text, type = "user") {
    const msg = document.createElement("div");
    msg.className = `chat-bubble ${type}`;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  sendBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, "user");
    input.value = "";
    setTimeout(() => addMessage("This is a response from the bot.", "bot"), 800);
  });
})();
