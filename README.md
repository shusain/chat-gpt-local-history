# OpenAI Chat History Chrome Extension

This Chrome extension retrieves past conversations from [chat.openai.com](https://chat.openai.com) by parsing your browser's history and displaying a list of unique conversation UUIDs. You can click on a UUID to open the corresponding chat in a new tab.

## Installation

### Prerequisites

- Google Chrome Browser

### Manual Installation

1. Clone this repository or download it as a ZIP file and extract it to your desired location.

    ```bash
    git clone https://github.com/shusain/chat-gpt-local-history.git
    ```

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" in the top right corner.

4. Click on "Load unpacked" and select the "chat-gpt-local-history" folder you cloned or extracted earlier.

5. The extension should now be visible in your Chrome extensions list, and an icon should appear next to the address bar.

## Usage

1. Navigate to [chat.openai.com](https://chat.openai.com).

2. Click on the extension's icon next to the address bar.

3. A list of past chats will appear in the popup window. Click on a UUID to open that specific chat in a new tab.

## License

This project is licensed under the [MIT License](LICENSE).
