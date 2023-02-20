chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "addMovieToList") {
      var movieTitle = document.title; // Extract the title of the movie from the webpage
      // Write code to extract other information like the movie's year, genre, etc.
  
      // Write code to add the movie to your list using the extracted information
      // This could involve sending a message to the background script to perform the action
      // and receiving a response to confirm that the movie has been added successfully
      // Once the movie has been added, you can send a message back to the popup.js file to display a success message to the user.
      sendResponse({ message: "Movie added to your list" });
    }
  });
  