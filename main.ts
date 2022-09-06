input.onButtonPressed(Button.A, function () {
    basic.showString("S")
    Stewart += 1
    basic.showNumber(Stewart)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    Tie += 1
    basic.showNumber(Tie)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    Bob += 1
    basic.showNumber(Bob)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("S")
    basic.showNumber(Stewart)
    basic.pause(1000)
    basic.showString("B")
    basic.showNumber(Bob)
    basic.pause(1000)
    basic.showString("T")
    basic.showNumber(Tie)
    basic.pause(1000)
    basic.clearScreen()
})
let Tie = 0
let Bob = 0
let Stewart = 0
Stewart = 0
Bob = 0
Tie = 0
