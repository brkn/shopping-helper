chrome.webRequest.onCompleted.addListener(
  (details) => {
    chrome.tabs.query(
      {active: true, currentWindow: true},
      (tabs) => {
        if (tabs[0].id) {
          chrome.tabs.sendMessage(
            tabs[0].id,
            details
          );
        }
      }
    );
  },
  {urls: ["<all_urls>"]}
);
