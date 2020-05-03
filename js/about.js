const paragraphs = document.querySelectorAll('p');
setTimeout(function () {
    paragraphs.forEach(function (paragraph) {
        paragraph.innerText = paragraph.innerText.replace(/the/g, "banana").replace(/The/g, "Banana");
    })
}, 3000);