chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
        console.log(sender);
        var originUrl = window.location.origin;
        var newUrl = originUrl + "/?test=testerparams";
        debugger;
        chrome.runtime.sendMessage({
            message: "open_new_tab",
            url: newUrl
        });
    }
});
