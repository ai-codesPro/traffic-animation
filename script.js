var horn = document.getElementById("horn")

function soundHorn() {
    window.onmouseenter = horn.play();
    window.onmouseleave = horn.muted()
    window.onmouseenter = horn.play();
    window.onmouseleave = horn.muted()
}