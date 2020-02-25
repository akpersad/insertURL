chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
        console.log(sender);
        var originUrl = window.location.href;
        var url1 = originUrl.split(/#(.+)/)[0];
        var url2 = originUrl.split(/#(.+)/)[1];
        var localHost1 = "?style=";
        var localHost2 = "&remoteRootCustomer=http://localhost:3002/";
        var combinedURL =
            url1 +
            localHost1 +
            request.inputs.theme +
            localHost2 +
            request.inputs.client +
            "/#" +
            url2;

        console.log(combinedURL);

        chrome.runtime.sendMessage({
            message: "open_new_tab",
            url: combinedURL
        });
    }
});
