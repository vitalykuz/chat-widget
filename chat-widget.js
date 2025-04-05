// Interactive Chat Widget for n8n
(function () {
  if (window.N8nChatWidgetLoaded) return;
  window.N8nChatWidgetLoaded = true;

  const widgetStyles = document.createElement('style');
  widgetStyles.textContent = `
    .chat-widget-container {
      --primary: #ffffff;
      --secondary: #cccccc;
      --background: #000000;
      --text: #ffffff;
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 380px;
      height: 580px;
      background: var(--background);
      color: var(--text);
      border-radius: 20px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      z-index: 9999;
      font-family: 'Poppins', sans-serif;
      display: flex;
      flex-direction: column;
    }

    .chat-widget-header {
      padding: 16px;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .chat-widget-header h2 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
    }

    .chat-widget-body {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
    }

    .chat-widget-footer {
      display: flex;
      padding: 12px;
      border-top: 1px solid #333;
    }

    .chat-widget-footer input {
      flex: 1;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #444;
      background: #111;
      color: #fff;
    }

    .chat-widget-footer button {
      margin-left: 8px;
      background: var(--primary);
      border: none;
      color: #000;
      padding: 10px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
    }

    .chat-widget-launcher {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--primary);
      color: #000;
      padding: 10px 16px;
      border-radius: 999px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      z-index: 9998;
    }
  `;
  document.head.appendChild(widgetStyles);

  const widget = document.createElement('div');
  widget.className = 'chat-widget-container';
  widget.style.display = 'none';

  widget.innerHTML = `
    <div class="chat-widget-header">
      <h2>VistFlow</h2>
      <button id="close-chat" style="background:none;border:none;font-size:18px;color:white;cursor:pointer">×</button>
    </div>
    <div class="chat-widget-body" id="chat-body"></div>
    <div class="chat-widget-footer">
      <input type="text" placeholder="Type your message..." id="chat-input" />
      <button id="send-chat">Send</button>
    </div>
  `;
  document.body.appendChild(widget);

  const launcher = document.createElement('div');
  launcher.className = 'chat-widget-launcher';
  launcher.textContent = 'Need help?';
  document.body.appendChild(launcher);

  launcher.addEventListener('click', () => {
    widget.style.display = 'flex';
    launcher.style.display = 'none';
  });

  document.getElementById('close-chat').addEventListener('click', () => {
    widget.style.display = 'none';
    launcher.style.display = 'block';
  });

  document.getElementById('send-chat').addEventListener('click', () => {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    const bubble = document.createElement('div');
    bubble.style.margin = '10px 0';
    bubble.textContent = message;
    document.getElementById('chat-body').appendChild(bubble);

    input.value = '';
  });
})();
