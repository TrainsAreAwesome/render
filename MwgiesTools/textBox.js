import { render } from "./render.js"
export { renderText }
import { Chalk } from "chalk"
import { normal } from "./normalFont.js"

let renderText = (text, textColour, font, bgColour) => {


    let commandConstruct = []
    let i = 0
    let line = null
    let currentChar = null
    let textNumber = 0
    let stupidVar = null

    while (textNumber < text.length) { // this loops through the sequence of letters to render

        currentChar = text.charAt(textNumber)

        i = 0

        while (i < font.maxHeight) { //this loops through each character to render

            stupidVar = `line = font.${currentChar}[i]`
            eval(stupidVar)
            let charNumber = 0

            
            while (charNumber <= line.length) { //this loops through each line of each character to render, starting from the top line and downwards

                if (commandConstruct[i] === undefined) {
                    commandConstruct[i] = ""
                }

                if (line.charAt(charNumber) === "#") {
                    commandConstruct[i] = commandConstruct[i] + textColour

                } else {
                    if (line.charAt(charNumber) === " ") {
                        commandConstruct[i] = commandConstruct[i] + bgColour

                    }
                }

                ++charNumber
            }
            ++i
        
        }


        ++textNumber

    }

    let anothervar = 0
    while (anothervar < commandConstruct.length) { //this loops through the commandConstruct array and renders it line by line
        render(commandConstruct[anothervar])
        ++anothervar
    }



    //console.log(commandConstruct)
}


renderText("aa", "e", normal, "r")