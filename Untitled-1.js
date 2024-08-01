document.addEventListener('DOMContentLoaded', () => {
    const analogButton = document.getElementById('analog-button');
    const digitalButton = document.getElementById('digital-button');
    const analogClock = document.getElementById('analogclk');
    const digitalClock = document.getElementById('digitalclk');

    analogButton.addEventListener('click', () => {
        analogClock.classList.remove('hidden');
        digitalClock.classList.add('hidden');
    });

    digitalButton.addEventListener('click', () => {
        digitalClock.classList.remove('hidden');
        analogClock.classList.add('hidden');
    });

    // Analog Clock start
    const hr = document.getElementById('hoursanalog');
    const min = document.getElementById('minutesanalog');
    const sec = document.getElementById('secondsanalog');

    setInterval(() => {
        const day = new Date();
        const hh = day.getHours() * 30;
        const mm = day.getMinutes() * 6;
        const ss = day.getSeconds() * 6;

        hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
        min.style.transform = `rotateZ(${mm}deg)`;
        sec.style.transform = `rotateZ(${ss}deg)`;
    }, 1000);

    // Digital Clock Start
    function digitalClockFunction() {
        const dateFunction = new Date();
        const day = dateFunction.getDay();
        let hours = dateFunction.getHours();
        let minutes = dateFunction.getMinutes();
        let seconds = dateFunction.getSeconds();
        let timeFormat = 'AM';

        timeFormat = hours >= 12 ? 'PM' : 'AM';
        hours = hours === 0 ? 12 : hours;
        hours = hours > 12 ? hours - 12 : hours;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.querySelector('.hours').innerHTML = hours;
        document.querySelector('.minutes').innerHTML = minutes;
        document.querySelector('.seconds').innerHTML = seconds;
        document.querySelector('.format').innerHTML = timeFormat;

        const todaysDay = document.querySelector(`.weekdays :nth-child(${day + 1})`);
        todaysDay.classList.add('active');
    }

    setInterval(digitalClockFunction, 1000);
});
