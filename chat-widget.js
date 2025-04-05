// VistFlow Chat Widget
(function () {
  if (window.N8nChatWidgetLoaded) return;
  window.N8nChatWidgetLoaded = true;

  const font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap';
  document.head.appendChild(font);

  const styles = document.createElement('style');
  styles.textContent = `
    .chat-assist-widget {
      --primary: #ffffff;
      --secondary: #cccccc;
      --bg: #000;
      --text: #fff;
      --text-light: #999;
      --border: #333;
      --radius: 14px;
      --shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      font-family: 'Poppins', sans-serif;
    }
    .chat-assist-widget,
    .chat-assist-widget * {
      box-sizing: border-box;
    }
    .chat-window {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 380px;
      height: 580px;
      background: var(--bg);
      color: var(--text);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      overflow: hidden;
      display: none;
      flex-direction: column;
      z-index: 9999;
    }
    .chat-window.visible {
      display: flex;
    }
    .chat-header {
      background: var(--bg);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .chat-header img {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: #fff;
      padding: 4px;
    }
    .chat-header span {
      font-size: 16px;
      font-weight: 600;
    }
    .chat-body {
      flex: 1;
      padding: 16px;
      background: #f9fafb;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .chat-footer {
      background: var(--bg);
      padding: 10px;
      border-top: 1px solid var(--border);
      display: flex;
      gap: 10px;
    }
    .chat-textarea {
      flex: 1;
      padding: 10px;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      background: #000;
      color: #fff;
      resize: none;
      font-size: 14px;
    }
    .chat-launcher {
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 12px 16px;
      background: var(--primary);
      color: #000;
      border: none;
      border-radius: 30px;
      box-shadow: var(--shadow);
      font-weight: 600;
      cursor: pointer;
    }
  `;
  document.head.appendChild(styles);

  const widget = document.createElement('div');
  widget.className = 'chat-assist-widget';
  widget.innerHTML = `
    <div class="chat-window">
      <div class="chat-header">
        <img src="https://vistflow.com/wp-content/uploads/2025/03/VistLogo100-2.png" />
        <span>VistFlow</span>
      </div>
      <div class="chat-body"></div>
      <div class="chat-footer">
        <textarea class="chat-textarea" placeholder="Type your message here..."></textarea>
        <button class="chat-submit">Send</button>
      </div>
    </div>
    <button class="chat-launcher">Need help?</button>
  `;
  document.body.appendChild(widget);

  const chatWindow = widget.querySelector('.chat-window');
  const launcher = widget.querySelector('.chat-launcher');

  launcher.addEventListener('click', () => {
    chatWindow.classList.toggle('visible');
  });
})();
