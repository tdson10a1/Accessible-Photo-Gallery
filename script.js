function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.textContent = "";
}

function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "none";
    imageDiv.textContent = "Hover over an image below to display here.";
}
