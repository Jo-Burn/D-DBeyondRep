let openEl = document.getElementById('open');
let change = document.getElementById('green')
let run = document.addEventListener('load', screenSize());
//let green = change.addEventListener('mouseover', greenText());
function posY(elm) {
    let test = elm, top = 0;
    while(!!test && test.tagName.toLowerCase() !== 'body') {
        top += test.offSetTop;
        test = test.offSetParent
    }
}
//document.addEventListener('onmousemove', greenText());
function greenText() {
   // console.log('hello')
    let newText = 'Link Not Found'
    document.getElementById('green').innerHTML = newText;
}
function oldText() {
    //console.log('goodbye')
    let oldText = 'Gods of the Multiverse';
    document.getElementById('green').innerHTML = oldText;
}
console.log(window.screen.width);
function screenSize() {
    if(window.screen.width <= 600) {
        let underline = document.getElementById('h1');
        console.log('yes');
        underline.classList.add("sUnderline");
    }
}