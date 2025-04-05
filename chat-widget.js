// Interactive Chat Widget for n8n
(function() {
    // Initialize widget only once
    if (window.N8nChatWidgetLoaded) return;
    window.N8nChatWidgetLoaded = true;

    // Load font resource - using Poppins for a fresh look
    const fontElement = document.createElement('link');
    fontElement.rel = 'stylesheet';
    fontElement.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    document.head.appendChild(fontElement);

    // Apply clean dark theme styles for VistFlow
    const widgetStyles = document.createElement('style');
    widgetStyles.textContent = `
        .chat-assist-widget {
            --chat-color-primary: #ffffff;
            --chat-color-secondary: #e5e5e5;
            --chat-color-tertiary: #cccccc;
            --chat-color-light: #222222;
            --chat-color-surface: #000000;
            --chat-color-text: #ffffff;
            --chat-color-text-light: #aaaaaa;
            --chat-color-border: #333333;
            --chat-radius-sm: 8px;
            --chat-radius-md: 12px;
            --chat-radius-lg: 20px;
            --chat-radius-full: 9999px;
            font-family: 'Poppins', sans-serif;
        }

        .chat-assist-widget * {
            box-sizing: border-box;
            color: var(--chat-color-text);
        }

        .chat-window {
            background: var(--chat-color-surface) !important;
            border: 1px solid var(--chat-color-border);
            border-radius: var(--chat-radius-lg);
        }

        .chat-header {
            background: #000000 !important;
            border-bottom: 1px solid var(--chat-color-border);
        }

        .chat-header-title {
            color: var(--chat-color-text) !important;
        }

        .chat-welcome-title {
            color: var(--chat-color-text);
        }

        .chat-start-btn {
            background: var(--chat-color-primary);
            color: #000000;
            border: none;
            border-radius: var(--chat-radius-md);
            font-weight: 600;
        }

        .chat-start-btn:hover {
            background: #dddddd;
        }

        .chat-launcher {
            background: var(--chat-color-primary);
            color: #000000;
            border: none;
            border-radius: var(--chat-radius-full);
        }

        .chat-launcher:hover {
            background: #dddddd;
        }

        .chat-controls,
        .chat-footer {
            background: var(--chat-color-surface);
            border-top: 1px solid var(--chat-color-border);
        }

        .chat-textarea {
            background: #111111;
            color: #ffffff;
            border: 1px solid var(--chat-color-border);
        }

        .chat-submit {
            background: var(--chat-color-primary);
            color: #000000;
        }

        .chat-bubble.bot-bubble {
            background: #111111;
            border: 1px solid #333;
            color: var(--chat-color-text);
        }

        .chat-bubble.user-bubble {
            background: var(--chat-color-primary);
            color: #000000;
        }

        .form-input {
            background: #111111;
            color: #ffffff;
            border: 1px solid var(--chat-color-border);
        }

        .form-label {
            color: var(--chat-color-text-light);
        }

        .registration-title {
            color: var(--chat-color-text);
        }
    `;
    document.head.appendChild(widgetStyles);

    // ...rest of your existing script remains unchanged...
})();
