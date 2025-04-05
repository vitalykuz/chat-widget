// Minimal Dark-Themed VistFlow Chat Widget (Working base)
(function () {
  if (window.N8nChatWidgetLoaded) return;
  window.N8nChatWidgetLoaded = true;

  const style = document.createElement("style");
  style.textContent = `
    .vistflow-widget {
      --primary: #ffffff;
      --background: #000000;
      --text: #ffffff;
      font-family: 'Poppins', sans-serif;
    }
    .vistflow-widget {
      position: fixed;
      bottom: 100px;
      right: 20px;
      width: 360px;
      height: 520px;
      background: var(--background);
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      color: var(--text);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      z-index: 9999;
    }
    .vistflow-widget-header {
      background: var(--background);
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .vistflow-widget-header img {
      width: 32px;
      height: 32px;
      border-radius: 6px;
    }
    .vistflow-widget-header span {
      font-weight: 600;
      font-size: 16px;
    }
    .vistflow-widget-body {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      background: #111;
    }
    .vistflow-widget-footer {
      padding: 16px;
      background: var(--background);
      border-top: 1px solid #333;
      display: flex;
      gap: 10px;
    }
    .vistflow-widget-footer input {
      flex: 1;
      padding: 12px;
      border-radius: 12px;
      border: none;
      background: #222;
      color: var(--text);
    }
    .vistflow-widget-footer button {
      padding: 12px;
      border-radius: 12px;
      background: var(--primary);
      color: #000;
      border: none;
      cursor: pointer;
    }
    .vistflow-launcher {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--primary);
      color: #000;
      padding: 12px 20px;
      border-radius: 999px;
      font-weight: 600;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 6px 20px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);

  const widget = document.createElement("div");
  widget.className = "vistflow-widget";
  widget.style.display = "none";
  widget.innerHTML = `
    <div class="vistflow-widget-header">
      <img src="https://vistflow.com/wp-content/uploads/2025/03/VistLogo100-2.png" alt="VistFlow" />
      <span>VistFlow</span>
    </div>
    <div class="vistflow-widget-body">
      <p>Welcome to VistFlow – AI-driven automation at your fingertips.</p>
    </div>
    <div class="vistflow-widget-footer">
      <input type="text" placeholder="Type your message..." />
      <button>&#10148;</button>
    </div>
  `;
  document.body.appendChild(widget);

  const launcher = document.createElement("button");
  launcher.className = "vistflow-launcher";
  launcher.innerHTML = `Need help?`;
  launcher.onclick = () => {
    widget.style.display = widget.style.display === "none" ? "flex" : "none";
  };
  document.body.appendChild(launcher);
})();
