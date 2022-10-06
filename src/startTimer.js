import { hourElement, minuteElement, secondElement, millisecondElement } from './variable.js'
import { Howl } from 'howler'
var sound = new Howl({
    src: ["./src/sound/sound.mp3"],
});

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

export function startTimer() {

    millisecond++

    // ms
    if (millisecond < 9) {
        millisecondElement.innerText = '0' + millisecond
    } else if (millisecond > 9) {
        millisecondElement.innerText = millisecond
    }

    if (millisecond > 99) {
        second++
        secondElement.innerText = '0' + second
        millisecond = 0
        millisecondElement.innerText = '0' + millisecond
    }

    // sec
    if (second < 9) {
        secondElement.innerText = '0' + second
    } else if (second > 9) {
        secondElement.innerText = second
    }
    //музыка раз в минуту
    if (second == 1 && millisecond == 1) {
        sound.play();
    }

    if (second > 59) {
        minute++
        minuteElement.innerText = '0' + minute
        second = 0
        secondElement.innerText = '0' + second
    }

    // min

    if (minute < 9) {
        minuteElement.innerText = '0' + minute
    } else if (minute > 9) {
        minuteElement.innerText = minute
    }



    if (minute > 59) {
        hour++
        hourElement.innerText = '0' + hour
        minutesecond = 0
        minuteElement.innerText = '0' + minute
    }
}
export function clearFields() {
    hour = 0
    minute = 0
    second = 0
    millisecond = 0
    hourElement.innerText = '00'
    minuteElement.innerText = '00'
    secondElement.innerText = '00'
    millisecondElement.innerText = '00'
}
