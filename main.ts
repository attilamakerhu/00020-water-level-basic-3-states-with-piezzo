basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.showLeds(`
            . . . . .
            . . # . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
})
