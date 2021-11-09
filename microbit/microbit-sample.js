let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        pins.servoWritePin(AnalogPin.P0, 80)
        basic.pause(100)
        pins.servoWritePin(AnalogPin.P0, 100)
        basic.pause(100)
    }
    pins.servoWritePin(AnalogPin.P0, 90)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    if (serial.readLine().includes("C")) {
        basic.showIcon(IconNames.Happy)
        for (let index = 0; index < 10; index++) {
            pins.servoWritePin(AnalogPin.P0, 80)
            basic.pause(100)
            pins.servoWritePin(AnalogPin.P0, 100)
            basic.pause(100)
        }
        pins.servoWritePin(AnalogPin.P0, 90)
    } else {
        basic.showIcon(IconNames.Sad)
        for (let index = 0; index < 20; index++) {
            pins.servoWritePin(AnalogPin.P0, 105)
            basic.pause(50)
            pins.servoWritePin(AnalogPin.P0, 75)
            basic.pause(50)
        }
        pins.servoWritePin(AnalogPin.P0, 90)
    }
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    strip = neopixel.create(DigitalPin.P8, 30, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 20; index++) {
        pins.servoWritePin(AnalogPin.P0, 105)
        basic.pause(50)
        pins.servoWritePin(AnalogPin.P0, 75)
        basic.pause(50)
    }
    pins.servoWritePin(AnalogPin.P0, 90)
})
basic.forever(function () {
    basic.pause(200)
    serial.writeNumber(input.rotation(Rotation.Roll))
    serial.writeLine("")
})
