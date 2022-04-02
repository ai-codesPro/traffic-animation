var horn = document.getElementById("horn")

window.onload = function () {
    horn.muted = true;
    window.onclick = horn.play();
    horn.muted = true;
    window.onclick = horn.play();
}