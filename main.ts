let Current_tempurature = 0
basic.forever(function () {
    Current_tempurature = input.temperature()
    basic.showNumber(Current_tempurature)
    basic.pause(1000)
    basic.clearScreen()
})
