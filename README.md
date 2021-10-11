# odin-project-etch-a-sketch
My solution to the Odin Project Etch-a-Sketch challenge.

How it works:
    When user opens up the page, our script generates the 960x960 pixels grid filled with the 16x16 squared divs. The squares represent the drawing pixels which can be hovered, doing so changes the color of the squares(pixels) and so it creates the effect of drawing. There is also the 'Reset' button, which when clicked clear the current grid and promts the user to enter a number of squares per side no more than 100 for the next grid.  

Hints:
    1. Create a webpage with a 16x16 grid of square divs.
    2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
    3. Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
    4. Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

