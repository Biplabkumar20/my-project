
let selectedColor = '#fff';
init();
makeColorPalette();

function init() {
    let dots = document.querySelector("#dots");
    for (let i = 0; i < dots.children.length; i++) {
        const element = dots.children[i];
        dots.addEventListener('click', changeColor);
    }
}

function makeColorPalette() {
    let palette = document.querySelector('#palette');
   // let colors = ['red', 'purple', 'gold', 'limegreen', 'blue'];
   let colors = ['#ff4abb', 'red', '#deff00', '#00ff25', '#00e2ff'];
    for (let i = 0; i < palette.children.length; i++) {
        const colorBox = palette.children[i];
        colorBox.style.backgroundColor = colors[i % colors.length];
        colorBox.addEventListener('click', function(e) {
            selectedColor = e.target.style.backgroundColor;
        });
        }
}


function changeColor(e) {
    console.log(e);
    e.target.style.backgroundColor = selectedColor;
}