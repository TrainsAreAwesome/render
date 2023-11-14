# render
## simple 16 colour rendering engine for JS using chalk

## how to use:
there are 2 main "features" so far, this is an early version"

### getting the required files
the only dependency is chalk so go get that from npm its "npm i chalk"

take out the files in the MwgiesTools folder and put them where you want to use this
in your code, type "import { render } from "render.js file location""
when you want to use render just call the render function: "render()"
when you call the render function, the one and only paramater is what you want to render.
go look at the colour codes in render.js and try a few of them out, eg "render(e)" would give you a white char.
if you use a char that isnt a colour code it will just skip that one entirely, it wont make a blank space or anything.

## upcoming features:
text box! a function that you can use to render a box with text in it, based upon the render function. status: in development
you can try this out for yourself by importing renderText from textBox.js.
then type renderText() param 1 is the text you want to render (only lowercase a and b will work now, but they will render as upercase)
param 2 is the text colour, param the is the font (just put "normal" in this), and param 4 is the background colour

###ok hope you enjoy
