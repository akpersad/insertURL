function urlConverter(request) {
    var originUrl = window.location.href;
    var url1 = originUrl.split(/#(.+)/)[0];
    var url2 = originUrl.split(/#(.+)/)[1];
    var localHost1 = "?style=";
    var localHost2 = "&remoteRootCustomer=http://localhost:3002/";
    var combinedURL = "";

    if (window.location.search.search("localhost") === -1) {
        if (window.location.search.indexOf(localHost1) === -1) {
            combinedURL =
                url1 +
                localHost1 +
                request.inputs.theme +
                localHost2 +
                request.inputs.client +
                "/#" +
                url2;
        } else {
            originUrl = window.location.href.split(localHost1).join("");
            url1 = originUrl.split(/#(.+)/)[0];
            url2 = originUrl.split(/#(.+)/)[1];
            combinedURL =
                url1 +
                localHost1 +
                request.inputs.theme +
                localHost2 +
                request.inputs.client +
                "/#" +
                url2;
        }
    } else {
        url1 =
            window.location.href.split(localHost1)[0] +
            localHost1 +
            request.inputs.theme;

        url2 =
            localHost2 +
            request.inputs.client +
            "/" +
            window.location.href
                .split(localHost1)[1]
                .split(localHost2)[1]
                .split(/\/(.+)/)[1];
        combinedURL = url1 + url2;
    }

    return combinedURL;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
        var goToUrl = urlConverter(request);

        chrome.runtime.sendMessage({
            message: "open_new_tab",
            url: goToUrl
        });
    }
});
