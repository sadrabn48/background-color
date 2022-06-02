let index = 0

function button() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "grey"]

    document.getElementsByTagName("body")[0].style.background = colors[index++]
    if (index > colors.length - 1)
        index = 0

}