// Name this external file gallery.js

function upDate(previewPic) {
    // Change the url for the background image of the div with the id = "image"
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    // Change the text of the div with the id = "image" to the alt text of the preview image
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
    // Update the url for the background image of the div with the id = "image" back to the original image
    document.getElementById('image').style.backgroundImage = "url('')";
    // Change the text of the div with the id = "image" back to the original text
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

