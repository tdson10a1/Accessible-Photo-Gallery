function upDate(previewPic) {
    console.log("Mouse over or focus triggered");
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Mouse leave or blur triggered");
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover or focus on an image below";
}

function addTabIndex() {
    console.log("Page loaded - adding tabindex");
    let figures = document.querySelectorAll("figure");

    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");

        let img = figures[i].querySelector("img");

        // Mouse events
        figures[i].addEventListener("mouseover", function () {
            upDate(img);
        });

        figures[i].addEventListener("mouseleave", function () {
            unDo();
        });

        // Keyboard events
        figures[i].addEventListener("focus", function () {
            upDate(img);
        });

        figures[i].addEventListener("blur", function () {
            unDo();
        });
    }
}
