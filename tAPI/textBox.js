export {textBox}
import { Chalk } from "chalk"
import { font } from "./font"

let textBox = (specifiedText, specifiedTextColour, specifiedBoxColour) => {

    let textColour = "chalk.bgWhite.hidden"
    let boxColour = "chalk.bgWhite.hidden"
    let commandConstuct = ""

    if (specifiedTextColour =~ null) {
        textColour = specifiedTextColour
    }

    if (specifiedBoxColour =~ null) {
        boxColour = specifiedBoxColour
    }

    
    while (i = 0, i < font.a.length) {
        commandConstuct = font.a[i].length
    }
}

textBox()