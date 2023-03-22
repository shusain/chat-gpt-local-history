document.addEventListener("DOMContentLoaded", function () {
    chrome.runtime.sendMessage({ type: "fetchChatHistory" }, function (response) {
      const chatList = document.getElementById("chat-list");
      response.chatHistory.forEach((chat) => {
        const anchorElement = document.createElement("a")
        anchorElement.href = "https://chat.openai.com/chat/" + chat.uuid
        anchorElement.target = "_blank"
        anchorElement.textContent = chat.title
        const listItem = document.createElement("li");
        listItem.appendChild(anchorElement)
        chatList.appendChild(listItem);
      });
    });
  });
  