// Interactive Chat Widget for n8n with Glassmorphism Styling
(function() {
    if (window.N8nChatWidgetLoaded) return;
    window.N8nChatWidgetLoaded = true;

    const fontElement = document.createElement('link');
    fontElement.rel = 'stylesheet';
    fontElement.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    document.head.appendChild(fontElement);

    const widgetStyles = document.createElement('style');
    widgetStyles.textContent = `
        .chat-assist-widget {
            --chat-color-primary: var(--chat-widget-primary, #ffffff);
            --chat-color-secondary: var(--chat-widget-secondary, #e0e0e0);
            --chat-color-tertiary: var(--chat-widget-tertiary, #cccccc);
            --chat-color-light: var(--chat-widget-light, #ffffff);
            --chat-color-surface: var(--chat-widget-surface, rgba(255, 255, 255, 0.1));
            --chat-color-text: var(--chat-widget-text, #ffffff);
            --chat-color-text-light: var(--chat-widget-text-light, #cfcfcf);
            --chat-color-border: var(--chat-widget-border, rgba(255, 255, 255, 0.2));

            --chat-shadow-md: 0 8px 24px rgba(0, 0, 0, 0.25);
            --chat-radius-md: 16px;
            --chat-radius-full: 9999px;
            --chat-transition: all 0.3s ease-in-out;
            font-family: 'Poppins', sans-serif;
        }

        .chat-assist-widget .chat-window,
        .chat-assist-widget .chat-launcher {
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid var(--chat-color-border);
            box-shadow: var(--chat-shadow-md);
            color: var(--chat-color-text);
        }

        .chat-assist-widget .chat-window {
            position: fixed;
            bottom: 90px;
            width: 380px;
            height: 580px;
            border-radius: var(--chat-radius-md);
            display: none;
            flex-direction: column;
            transition: var(--chat-transition);
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px) scale(0.95);
        }

        .chat-assist-widget .chat-window.visible {
            display: flex;
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        .chat-assist-widget .chat-launcher {
            position: fixed;
            bottom: 20px;
            right: 20px;
            border-radius: var(--chat-radius-full);
            padding: 12px 20px;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: var(--chat-transition);
        }

        .chat-assist-widget .chat-launcher:hover {
            transform: scale(1.05);
        }

        .chat-assist-widget .chat-launcher svg {
            width: 24px;
            height: 24px;
            stroke: white;
        }

        .chat-assist-widget .chat-launcher-text {
            font-size: 15px;
            font-weight: 600;
            color: white;
        }
    `;
    document.head.appendChild(widgetStyles);

    const widgetRoot = document.createElement('div');
    widgetRoot.className = 'chat-assist-widget';
    widgetRoot.style.setProperty('--chat-widget-primary', '#ffffff');
    widgetRoot.style.setProperty('--chat-widget-secondary', '#cccccc');
    widgetRoot.style.setProperty('--chat-widget-surface', 'rgba(255,255,255,0.1)');
    widgetRoot.style.setProperty('--chat-widget-text', '#ffffff');
    widgetRoot.style.setProperty('--chat-widget-light', '#ffffff');
    widgetRoot.style.setProperty('--chat-widget-text-light', '#cfcfcf');
    widgetRoot.style.setProperty('--chat-widget-border', 'rgba(255, 255, 255, 0.2)');

    const chatWindow = document.createElement('div');
    chatWindow.className = 'chat-window';
    widgetRoot.appendChild(chatWindow);

    const launcher = document.createElement('button');
    launcher.className = 'chat-launcher';
    launcher.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span class="chat-launcher-text">Need help?</span>
    `;

    widgetRoot.appendChild(launcher);
    document.body.appendChild(widgetRoot);

    launcher.addEventListener('click', () => {
        chatWindow.classList.toggle('visible');
    });
})();
