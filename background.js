chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "fetchChatHistory") {
      let startTime = new Date();
      startTime.setTime(startTime.getTime() - 1000 * 60 * 60 * 24 * 90) // 90 days back in ms
      chrome.history.search({ text: "chat.openai.com", maxResults: 1000, startTime: startTime.getTime() }, (results) => {
        const chatHistory = [];
        const chatUrlRegex = /https:\/\/chat\.openai\.com\/chat\/([a-zA-Z0-9\-]+)$/;
  
        results.forEach((result) => {
          const match = result.url.match(chatUrlRegex);
          if (match) {
            const uuid = match[1];
            const title = result.title || `Chat: ${uuid}`;
            chatHistory.push({ uuid, title });
          }
        });
  
        sendResponse({ chatHistory });
      });
  
      return true;
    }
  });
  