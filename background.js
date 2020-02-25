console.log("begin background.js");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "open_new_tab") {
        chrome.tabs.update({ url: request.url });
    }
});
