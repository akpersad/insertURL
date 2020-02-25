function hello(event) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        console.log("hello ");
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            message: "clicked_browser_action",
            test: event
        });
    });
}

document
    .querySelector("#andrew-chrome-extension")
    .addEventListener("click", function() {
        var tester = document.getElementById("fname").value;
        hello(tester);
    });
