radio.onReceivedNumber(function (receivedNumber) {
    let ReceivedNumber = 0
    if (ReceivedNumber == 1) {
        if (Juego == 2) {
            basic.showIcon(IconNames.Happy)
        } else if (Juego == 1) {
            basic.showIcon(IconNames.Asleep)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else if (ReceivedNumber == 2) {
        if (Juego == 2) {
            basic.showIcon(IconNames.Asleep)
        } else if (Juego == 1) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else if (ReceivedNumber == 3) {
        if (Juego == 2) {
            basic.showIcon(IconNames.Sad)
        } else if (Juego == 1) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Asleep)
        }
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    Juego = randint(1, 3)
    radio.sendNumber(Juego)
    if (Juego == 1) {
        basic.showIcon(IconNames.Square)
    } else if (Juego == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.pause(2000)
})
let Juego = 0
radio.setGroup(1)
