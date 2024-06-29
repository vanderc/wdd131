function WindChill(tempF, speed) {
    return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
}

let tempF = 77;
let speed = 4;
if(tempF <= 77 && speed > 4) {
    document.getElementById("wcf".innerHtml = '${WindChill(tempF, speed).toFixed(1)} °F')
}