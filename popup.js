document.addEventListener("DOMContentLoaded", function() {
    var addMovieButton = document.getElementById("add-movie-button");
  
    addMovieButton.addEventListener("click", function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "addMovieToList" }, function(response) {
          console.log(response.message);
        });
      });
    });
  });
  