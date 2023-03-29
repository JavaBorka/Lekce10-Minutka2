'use strict';

console.log('funguju!');

const counter = (event) => {
    event.preventDefault()
    let time = Number(document.querySelector('input').value)

    const alarmSeconds = document.querySelector('.alarm__seconds')
    alarmSeconds.textContent = time

    const timer = () => {

        if (time > 0) {
        time -= 1
        alarmSeconds.textContent = time
        }
        if (time <= 0) {
            clearInterval(casovac)
            const alarmElm = document.querySelector('.alarm')
            alarmElm.classList.add('alarm--ring')
            document.querySelector('audio').play()
        }
    }

   const casovac = setInterval(timer, 1000)
}

document.querySelector('.container').addEventListener('submit', counter)
console.log('Odeslali jsme formulář')