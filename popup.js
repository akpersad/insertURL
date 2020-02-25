var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-36788567-7"]);
_gaq.push(["_trackPageview"]);

function hello(event) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            message: "clicked_browser_action",
            inputs: event
        });
    });
}

function trackButton(e) {
    _gaq.push(["_trackEvent", e.target.id, "clicked"]);
}

document
    .querySelector("#andrew-chrome-extension")
    .addEventListener("click", function(event) {
        var theme = document.querySelector("#theme").value;
        var client = document.querySelector("#client").value;
        var sameName = document.querySelector("#sameName").value;
        var inputObject = { theme: theme, client: client, sameName: sameName };
        hello(inputObject);
        trackButton(event);
    });

document.querySelector("#sameName").addEventListener("click", function(event) {
    if (event.target.checked) {
        document.querySelector("#client").value = document.querySelector(
            "#theme"
        ).value;
        document.querySelector("#client").disabled = "disabled";
    } else {
        document.querySelector("#client").value = " ";
        document.querySelector("#client").disabled = false;
    }
});

(function() {
    var ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src = "https://ssl.google-analytics.com/ga.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ga, s);
})();
