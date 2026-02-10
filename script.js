function upDate(previewPic) {
    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "none";
    imageDiv.textContent = "Hover over an image below to display here.";
}

window.onload = function () {
    const images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }

    console.log("Tabindex added to all images");
};
