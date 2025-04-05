// Chat Widget for n8n with proper right placement and minimal styling
(function() {
    if (window.N8nChatWidgetLoaded) return;
    window.N8nChatWidgetLoaded = true;

    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap';
    document.head.appendChild(font);

    const style = document.createElement('style');
    style.textContent = `
    .chat-widget {
        --bg: #000;
        --text: #fff;
        --input-bg: #111;
        --btn-bg: #fff;
        --btn-text: #000;
        font-family: 'Poppins', sans-serif;
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 360px;
        height: 540px;
        background: var(--bg);
        color: var(--text);
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        display: none;
        flex-direction: column;
        overflow: hidden;
        z-index: 1000;
    }

    .chat-widget.visible { display: flex; }

    .chat-header {
        background: #000;
        color: #fff;
        padding: 16px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .chat-body {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        background: #111;
    }

    .chat-footer {
        padding: 16px;
        display: flex;
        gap: 8px;
        background: #000;
    }

    .chat-input {
        flex: 1;
        padding: 10px 12px;
        border-radius: 8px;
        border: none;
        background: var(--input-bg);
        color: var(--text);
    }

    .chat-submit {
        background: var(--btn-bg);
        color: var(--btn-text);
        border: none;
        border-radius: 8px;
        padding: 0 16px;
        cursor: pointer;
    }

    .chat-launcher {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 30px;
        background: var(--btn-bg);
        color: var(--btn-text);
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        z-index: 999;
    }
    `;
    document.head.appendChild(style);

    const widget = document.createElement('div');
    widget.className = 'chat-widget';
    widget.innerHTML = `
        <div class="chat-header">
            VistFlow <span style="cursor:pointer" id="chat-close">&#10005;</span>
        </div>
        <div class="chat-body" id="chat-messages">
            <div><strong>Welcome!</strong> How can we help you today?</div>
        </div>
        <div class="chat-footer">
            <input type="text" class="chat-input" placeholder="Type a message...">
            <button class="chat-submit">Send</button>
        </div>
    `;
    document.body.appendChild(widget);

    const launcher = document.createElement('div');
    launcher.className = 'chat-launcher';
    launcher.textContent = 'Need help?';
    document.body.appendChild(launcher);

    launcher.addEventListener('click', () => {
        widget.classList.add('visible');
    });

    widget.querySelector('#chat-close').addEventListener('click', () => {
        widget.classList.remove('visible');
    });

    widget.querySelector('.chat-submit').addEventListener('click', () => {
        const input = widget.querySelector('.chat-input');
        const msg = input.value.trim();
        if (!msg) return;
        const messages = widget.querySelector('#chat-messages');
        const bubble = document.createElement('div');
        bubble.style.margin = '8px 0';
        bubble.textContent = msg;
        messages.appendChild(bubble);
        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    });
})();
