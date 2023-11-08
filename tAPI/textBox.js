import { render } from "./render.js"
export { textBox }
import { Chalk } from "chalk"
//import { font } from "./font.js"

let textBox = (text, textColour, boxColour) => {

    let boxOutLinep = boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour + boxColour
    let boxOutLine = boxOutLinep + boxOutLinep + boxOutLinep + boxOutLinep + boxOutLinep

    let a = 
    ["##",
    "#  #",
   "#    #",
  "########",
 "#        #",
"#          #"  ]


    let commandConstuct = ""
    let i = 0
    while (i < 10) {
        commandConstuct = ""
        if (i === 0 || i === 9) {
            commandConstuct = boxOutLine
        } else {
            if (i === 1 || i === 8) {
                commandConstuct = ""
          } else {
                commandConstuct = "r"
                let o = 0
                while (o < a[i].length) {
                commandConstuct = commandConstuct + textColour
                    ++o
               }


            }
        }






        render(commandConstuct)
        //console.log(commandConstuct)
        ++i
    }
}

textBox("a", "e", "e")