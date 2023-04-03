const d= document, w = window;
function vibrate(time) {
    w.navigator.vibrate(time);
    console.log("exito");
}

d.addEventListener("load", vibrate(3000));

