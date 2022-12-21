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



let render = (line) => { //this is the funtion that you call to render somthing, it checks for a colour code on each char and adds a block of colour to commandConstruct which gets console.log() ed out at the end, the line param is the actual colour code text that you send to be rendered
    let commandConstuct = ("console.log(") // this is the var for the console.log() command that will be constructed in the loop below, dont worry that its a string or has one bracket, its ment to be like that
    let lineLength = line.length - 1 //its what it says it is

    for (let i = 0; i <= lineLength; i++) { // this loop starts the command build proscess

        if (line.charAt(i) === black) {
            commandConstuct = commandConstuct + " chalk.reset.hidden(' ') +"

        } else {

            if (line.charAt(i) === red) {
                commandConstuct = commandConstuct + " chalk.reset.bgRed.hidden('r') +"

            } else {

                if (line.charAt(i) === green) {
                    commandConstuct = commandConstuct + " chalk.reset.bgGreen.hidden('g') +"

                } else {

                    if (line.charAt(i) === yellow) {
                        commandConstuct = commandConstuct + " chalk.reset.bgYellow.hidden('y') +"

                    } else {

                        if (line.charAt(i) === blue) {
                            commandConstuct = commandConstuct + " chalk.reset.bgBlue.hidden('b') +"

                        } else {

                            if (line.charAt(i) === magenta) {
                                commandConstuct = commandConstuct + " chalk.reset.bgMagenta.hidden('m') +"

                            } else {

                                if (line.charAt(i) === cyan) {
                                    commandConstuct = commandConstuct + " chalk.reset.bgCyan.hidden('c') +"

                                } else {

                                    if (line.charAt(i) === white) {
                                        commandConstuct = commandConstuct + " chalk.reset.bgWhite.hidden('w') +"

                                    } else {

                                        if (line.charAt(i) === grey) {
                                            commandConstuct = commandConstuct + " chalk.reset.bgGrey.hidden('g') +"

                                        } else {

                                            if (line.charAt(i) === brightRed) {
                                                commandConstuct = commandConstuct + " chalk.reset.bgRedBright.hidden('t') +"

                                            } else {

                                                if (line.charAt(i) === brightGreen) {
                                                    commandConstuct = commandConstuct + " chalk.reset.bgGreenBright.hidden('h') +"

                                                } else {

                                                    if (line.charAt(i) === brightYellow) {
                                                        commandConstuct = commandConstuct + " chalk.reset.bgYellowBright.hidden('u') +"

                                                    } else {

                                                        if (line.charAt(i) === brightBlue) {
                                                            commandConstuct = commandConstuct + " chalk.reset.bgBlueBright.hidden('n') +"

                                                        } else {

                                                            if (line.charAt(i) === brightMagenta) {
                                                                commandConstuct = commandConstuct + " chalk.reset.bgMagentaBright.hidden('/') +"

                                                            } else {

                                                                if (line.charAt(i) === brightCyan) {
                                                                    commandConstuct = commandConstuct + " chalk.reset.bgCyanBright.hidden('v') +"

                                                                } else {

                                                                    if (line.charAt(i) === brightWhite) {
                                                                        commandConstuct = commandConstuct + " chalk.reset.bgWhiteBright.hidden('e') +"

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
        }
    }
//yes i know that looks really bad but it makes it more efficient

    commandConstuct = commandConstuct + " chalk.reset.hidden(' '))"
    //console.log(commandConstuct) //use that to see the actual command this file creates (might be good for debuging)

    eval(commandConstuct) //prints the line
}