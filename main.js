let time;
let begin = new Date().getTime();
function randomColor() {
    let hex = '0123456789ABCDEF'.split('');
    let hash = '#';
    for (let i = 0; i < 6; i++){
        hash += hex[Math.floor(Math.random() * 16)];
    }
    return hash;
}
function showShape() {
    let top = Math.floor(Math.random() * 700);
    let left = Math.floor(Math.random() * 1000);
    let width = Math.floor(Math.random() * 200) +100;

    if (Math.floor(Math.random() > 0.5)) {
        document.getElementById('shape').style.borderRadius = "50%";
    } else {
        document.getElementById('shape').style.borderRadius = '0%'
    }

    document.getElementById('shape').style.backgroundColor = randomColor();
    document.getElementById('shape').style.width = width + "px";
    document.getElementById('shape').style.height = width + "px";
    document.getElementById('shape').style.top = top + "px";
    document.getElementById('shape').style.left = left + "px";
    document.getElementById('shape').style.display = 'block';
    begin = new Date().getTime();
}

function showShapeAfterDelay() {
    setTimeout(showShape, Math.floor(Math.random() * 2500));
}
showShapeAfterDelay()
document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = 'none';
    let end = new Date().getTime();

    let time = (end - begin) / 1000;
    document.getElementById("timeTaken").innerHTML = time + "s";
    if (time > 1) {
        document.getElementById('gameOver').innerHTML = 'Game Over';
        document.getElementById('gameOver').style.fontSize = '60px';
    } else {
        showShapeAfterDelay();
    }
    


}
