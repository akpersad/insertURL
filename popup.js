function hello(event) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        console.log("hello ");
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            message: "clicked_browser_action",
            inputs: event
        });
    });
}

document
    .querySelector("#andrew-chrome-extension")
    .addEventListener("click", function() {
        var theme = document.querySelector("#theme").value;
        var client = document.querySelector("#client").value;
        var sameName = document.querySelector("#sameName").value;
        var inputObject = { theme: theme, client: client, sameName: sameName };
        hello(inputObject);
    });

document.querySelector("#sameName").addEventListener("click", function(event) {
    if (event.target.value) {
        document.querySelector("#client").value = document.querySelector(
            "#theme"
        ).value;
        document.querySelector("#client").disabled = "disabled";
    } else {
        document.querySelector("#client").value = "";
        document.querySelector("#client").disabled = "false";
    }
});
