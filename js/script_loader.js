// script_loader.js


// Define an array of script paths
var scriptPaths = [
    "js/home_script.js", "js/name_animation.js"];


function loadScripts() {
    scriptPaths.forEach(function (path) {
        var script = document.createElement("script");
        script.src = path;
        document.body.appendChild(script);
    });
}

loadScripts();