var read = require('node-readability');

read('/market', function(err, article, meta) {
  // Main Article
  console.log(article.content);
  // Title
  console.log(article.title);

  // HTML Source Code
  console.log(article.html);
  // DOM
  console.log(article.document);

  // Response Object from Request Lib
  console.log(meta);

  // Close article to clean up jsdom and prevent leaks
  article.close();
});
// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function callback(tab){
    var url = tab.url.replace('watch','watch_popup');
    chrome.windows.create({url:url,type:
    'panel'});
}


// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
    // If the letter 'g' is found in the tab's URL...
    if (tab.url.indexOf('youtube.com/watch')>-1) {
        // ... show the page action.
        ytplayer = document.getElementById("movie_player");
        console.log(ytplayer);
        chrome.pageAction.show(tabId);

    }
};

// Listen for any changes to the URL of any tab.

chrome.pageAction.onClicked.addListener(callback);
chrome.tabs.onUpdated.addListener(checkForValidUrl);

