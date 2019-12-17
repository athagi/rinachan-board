var filledColor = "#ff00ff"

function display(canvas, face) {
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        context.strokeStyle = "darkgray";
        var x = 0,
            y = 0,
            z = 45;
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 20; j++) {
                drawBox(context, x, y, z, face[i][j] == 1 ? true : false);
                x += z;
            }
            y += z;
            x = 0;

        }
    }
}

function drawBox(context, x, y, z, filled) {
    if (filled) {
        context.fillStyle = filledColor
        context.fillRect(x, y, z, z)
    } else {
        context.strokeRect(x, y, z, z);
    }
}

function getDisplay() {
    width = window.screen.availWidth;
    height = window.screen.availHeight;

}

function drawBase(canvas) {

    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'floralwhite';
    ctx.fillRect(0, 0, 900, 900);
}

function main() {
    const canvas = document.getElementById('base');
    drawBase(canvas);
    display(canvas, faces['wink']);
}

function update() {

    keys = Object.keys(faces);
    faceType = keys[Math.floor(Math.random() * keys.length)];
    face = faces[faceType];
    const canvas = document.getElementById('base');
    display(canvas, face);
    console.log("new face " + faceType);
    setTimeout(() => {
        drawBase(canvas);
        display(canvas, face);
    }, 250);



}