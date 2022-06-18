const clock = document.querySelector("h2#clock");

function getClock() {
    const time = new Date();
    const houres = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    clock.innerText = `${houres}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
