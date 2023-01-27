export { render }
import chalk from "chalk" //it says its value is never read, thats because the command that uses chalk is made using strings and executed using eval() so your editor doesnt know that it is acutally used

// renderer, works by passing through text, the renderer converts it to chalk colours by making the text invisible and colouring the background
// COLOUR CODES! use these codes to make an imiage with pixels USE IN LOWER CASE!!!!!!!!!!

let black = (" ")
let red = ("r")
let green = ("g")
let yellow = ("y")
let blue = ("b")
let magenta = ("m")
let cyan = ("c")
let white = ("w")
let grey = ("g")
let brightRed = ("t")
let brightGreen = ("h")
let brightYellow = ("u")
let brightBlue = ("n")
let brightMagenta = ("/")
let brightCyan = ("v")
let brightWhite = ("e")




























let render = (line) => {
    let commandConstuct = "process.stdout.write("
    console.log(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`)

    for (let i = 1; i <= line.length; 1) {  
        let char = line.charAt(i)

        if (char === black) {
            commandConstuct = commandConstuct + "chalk.reset.hidden(' ')"

        } else {

            if (char === red) {
                commandConstuct = commandConstuct + "chalk.reset.bgRed.hidden('r')"

            } else {

                if (char === green) {
                    commandConstuct = commandConstuct + "chalk.reset.bgGreen.hidden('g')"

                } else {

                    if (char === yellow) {
                        commandConstuct = commandConstuct + "chalk.reset.bgYellow.hidden('y')"

                    } else {

                        if (char === blue) {
                            commandConstuct = commandConstuct + "chalk.reset.bgBlue.hidden('b')"

                        } else {

                            if (char === magenta) {
                                commandConstuct = commandConstuct + "chalk.reset.bgMagenta.hidden('m')"

                            } else {

                                if (char === cyan) {
                                    commandConstuct = commandConstuct + "chalk.reset.bgCyan.hidden('c')"

                                } else {

                                    if (char === white) {
                                        commandConstuct = commandConstuct + "chalk.reset.bgWhite.hidden('w')"

                                    } else {

                                        if (char === grey) {
                                            commandConstuct = commandConstuct + "chalk.reset.bgGrey.hidden('g')"

                                        } else {

                                            if (char === brightRed) {
                                                commandConstuct = commandConstuct + "chalk.reset.bgRedBright.hidden('t')"

                                            } else {

                                                if (char === brightGreen) {
                                                    commandConstuct = commandConstuct + "chalk.reset.bgGreenBright.hidden('h')"

                                                } else {

                                                    if (char === brightYellow) {
                                                        commandConstuct = commandConstuct + "chalk.reset.bgYellowBright.hidden('u')"

                                                    } else {

                                                        if (char === brightBlue) {
                                                            commandConstuct = commandConstuct + "chalk.reset.bgBlueBright.hidden('n')"

                                                        } else {

                                                            if (char === brightMagenta) {
                                                                commandConstuct = commandConstuct + "chalk.reset.bgMagentaBright.hidden('/')"

                                                            } else {

                                                                if (char === brightCyan) {
                                                                    commandConstuct = commandConstuct + "chalk.reset.bgCyanBright.hidden('v')"

                                                                } else {

                                                                    if (char === brightWhite) {
                                                                        commandConstuct = commandConstuct + "chalk.reset.bgWhiteBright.hidden('e')"

                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            commandConstuct = commandConstuct + ")"
            eval(commandConstuct)
        }
    }
}
























