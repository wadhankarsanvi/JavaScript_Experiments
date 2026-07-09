// EXTERNAL JS

document.getElementById("externalBtn").onclick = function () {
    console.log("External JS: Screen size - " + screen.width + " x " + screen.height);
    console.error("External JS: This is an example error message.");
    console.trace("External JS: Trace of function call");
};
