// yes yes i know this is probably some of the worst code youve ever seen but im not good at this yet and it works so im not touching it

export { render }
import chalk from "chalk"
const cl = console.log
const ch = chalk

// renderer, works by passing through text, the renderer converts it to chalk colours by making the text invisible and colouring the background
// COLOUR CODES! use these codes to make an imiage with pixels USE IN LOWER CASE!
let black = ("-")
let red = ("r")
let green = ("g")
let yellow = ("y")
let blue = ("b")
let magenta = ("m")
let cyan = ("c")
let white = ("w")
let grey = ("f")
let brightRed = ("t")
let brightGreen = ("h")
let brightYellow = ("u")
let brightBlue = ("n")
let brightMagenta = ("/")
let brightCyan = ("v")
let brightWhite = ("e")



let render = (line) => { //this is the funtion thats called from index.js, and line is the list of colour codes to be rendered
    let commandConstuct = ("console.log(") // this is the var for the console.log() command that will be constructed in the loop below, dont worry that its a string or has one bracket, its ment to be like that
    let lineLength = line.length - 1 //its what it says it is

    for (let i = 0; i <= lineLength; i++) { // this loop starts the command build proscess

        if (line.charAt(i) === black) {
            commandConstuct = commandConstuct + " chalk.reset(' ') +"

        }

        if (line.charAt(i) === red) {
            commandConstuct = commandConstuct + " chalk.bgRed.hidden('r') +"

        }

        if (line.charAt(i) === green) {
            commandConstuct = commandConstuct + " chalk.bgGreen.hidden('g') +"

        }

        if (line.charAt(i) === yellow) {
            commandConstuct = commandConstuct + " chalk.bgYellow.hidden('y') +"

        }

        if (line.charAt(i) === blue) {
            commandConstuct = commandConstuct + " chalk.bgBlue.hidden('b') +"

        }

        if (line.charAt(i) === magenta) {
            commandConstuct = commandConstuct + " chalk.bgMagenta.hidden('m') +"

        }

        if (line.charAt(i) === cyan) {
            commandConstuct = commandConstuct + " chalk.bgCyan.hidden('c') +"

        }

        if (line.charAt(i) === white) {
            commandConstuct = commandConstuct + " chalk.bgWhite.hidden('w') +"

        }

        if (line.charAt(i) === grey) {
            commandConstuct = commandConstuct + " chalk.bgGrey.hidden('f') +"

        }

        if (line.charAt(i) === brightRed) {
            commandConstuct = commandConstuct + " chalk.bgRedBright.hidden('t') +"

        }

        if (line.charAt(i) === brightGreen) {
            commandConstuct = commandConstuct + " chalk.bgGreenBright.hidden('h') +"

        }

        if (line.charAt(i) === brightYellow) {
            commandConstuct = commandConstuct + " chalk.bgYellowBright.hidden('u') +"

        }

        if (line.charAt(i) === brightBlue) {
            commandConstuct = commandConstuct + " chalk.bgBlueBright.hidden('n') +"

        }

        if (line.charAt(i) === brightMagenta) {
            commandConstuct = commandConstuct + " chalk.bgMagentaBright.hidden('/') +"

        }

        if (line.charAt(i) === brightCyan) {
            commandConstuct = commandConstuct + " chalk.bgCyanBright.hidden('v') +"

        }

        if (line.charAt(i) === brightWhite) {
            commandConstuct = commandConstuct + " chalk.bgWhiteBright.hidden('e') +"

        }
    }
    
    commandConstuct = commandConstuct + " chalk.reset(' '))"
    //console.log(commandConstuct) //this command is for debug, it does a console.log() on the console.log() command the renderer sends out to render the image (if that makes any sense to you, if it doesnt, try enabling it) P.S. it prints one line at a time, a bit like an old CRT display

    eval(commandConstuct) //prints the line
}
