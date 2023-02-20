chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { file: "content.js" });
  });
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "addMovieToList") {
      // Write code to add movie to your list here
      sendResponse({ message: "Movie added to your list" });
    }
  });
  