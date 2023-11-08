export {textBox}
import { Chalk } from "chalk"


let textBox = (specifiedText, specifiedTextColour, specifiedBoxColour) => {

    let textColour = "chalk.bgWhite.hidden"
    let boxColour = "chalk.bgWhite.hidden"

    if (specifiedTextColour =~ null) {
        textColour = specifiedTextColour
    }

    if (specifiedBoxColour =~ null) {
        boxColour = specifiedBoxColour
    }

    

}