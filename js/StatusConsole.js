async function typeWriter(Text, ElementID, index = 0, TypingSpeed = 50) {
    while (index < Text.length) {
        document.getElementById(ElementID).innerHTML += Text.charAt(index);
        index++;
        console.log("index: " + index);
        await sleep(TypingSpeed);
    }
}

// load on start
window.onload = function() {
  console.log("StatusConsole.js loaded");
  typeWriter("Hello World!", "TextRow1");
}