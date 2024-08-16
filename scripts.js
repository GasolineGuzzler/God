document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const pasteContent = document.querySelector("#paste").value;

    if (pasteContent) {
        // Create a new paste element
        const pasteElement = document.createElement("div");
        pasteElement.classList.add("paste");
        pasteElement.textContent = pasteContent;

        // Add the paste to the paste list
        document.querySelector("#pastelist").appendChild(pasteElement);

        // Clear the textarea
        document.querySelector("#paste").value = "";
    }
});
