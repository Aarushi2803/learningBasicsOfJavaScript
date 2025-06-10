const clock = document.getElementById('clock');
setInterval(function () {
    let date = new Date();
    clock.style.fontSize = "30px";
    clock.innerHTML = date.toLocaleTimeString();
})