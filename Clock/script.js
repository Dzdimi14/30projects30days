const hr = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');

function setDate() {
    const now = new Date()

    const getSec = now.getSeconds();
    const getMin = now.getMinutes();
    const getHr = now.getHours();

    secDegree = (getSec / 60) * 360;
    minDegree = (getMin / 60) * 360;
    hrDegree = (getHr / 12) * 360;
    sec.style.transform = `rotate(${secDegree}deg)`
    min.style.transform = `rotate(${minDegree}deg)`
    hr.style.transform = `rotate(${hrDegree}deg)`

    


}
console.log("yo")
setInterval(setDate, 1000)