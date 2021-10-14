// HTML elements
const gridSideLength = 960;
const gridContainer = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');

// Grid properties
var currentGrid = null;
var numberOfRows = 0;
var numberOfColumns = 0;
var squareWidth = 0;
var squareHeight = 0;

var baseColor = '';
var passCount = 0;
var newR, newG, newB, currentR, currentG, currentB = 0;
var shadeFactor = 0.1;

// Set the grid size
gridContainer.style.width = gridSideLength + 'px';
gridContainer.style.height = gridSideLength + 'px';

// Sets grid values for the variables above
setGridProperties(31);

// Draws the default 16x16 grid when the page is loaded
document.body.onload = () => {
    drawGrid();
}

// Adds the click-event handler to the reset button
resetBtn.addEventListener('click', handlerReset);

// The purpose of the function is to draw a grid
// either when the page is loaded or after the user pressed the 'Reset' button
 function drawGrid() {
    // store the grid to be drawn in a variable because
    // whenever we'll need to erase the grid in the future,
    // rather than to run the loops again,
    // we can just simply call the gridContainer.removeChild(currentGrid)
    // which makes the process of erasing more efficient
    currentGrid = createDiv();
    
    // Run the nested loop to fill each row-div with the column-divs
    // Draw the rows
    for (let i = 0; i < numberOfRows; i++) {
        // Draw a row
        let row = createDiv();
        // Display flex so the squares are laid-out evenly in the row
        row.style.display = 'flex';
        
        // Draw the columns
        for (let i = 0; i < numberOfColumns; i++) {
            // Draw a column
            let column = createDiv();
            column.style.width = squareWidth + 'px';
            column.style.height = squareHeight + 'px';

            // Add the hover event handler
            column.addEventListener('pointerover', () => {
                handlerSquareHovered(column);
            });

            // Add the column to the row
            row.appendChild(column);
        }
        
        // Append the row to the grid
        currentGrid.appendChild(row);
    }

    // Append the grid to the grid container
    gridContainer.appendChild(currentGrid);
 }

// Being called when the 'Reset' button is pressed and performs the following actions:
//  1. Erases the current grid
//  2. Promts the user to enter a number of squares per side for the new grid
//  3. Draws a new grid
function handlerReset() {
    // Erase the current grid
    if (gridContainer.children[0] == currentGrid) {
        gridContainer.removeChild(currentGrid);
    } else {
        alert('You have already reset the grid.');
        return;
    }

    squaresPerSide = 0;
    // Ask the user for a number of squares per side for a new grid
    while (!(typeof squaresPerSide == 'number' && squaresPerSide >= 16 && squaresPerSide <= 100)) {
        squaresPerSide = parseInt(prompt('Enter a number of rows per side no less than 16 and more than 100.'));
    }
    // Reset the grid properties
    setGridProperties(squaresPerSide);

    // # DEBUG
    console.log('Number of squares inputted: ' + squaresPerSide);

    // Draw a new grid
    drawGrid();
}

// The grid squares hover-state callback

// When mouse passes through a square 
// it generates a random RGB value for that squares' color
// after that each pass through another square adds the random color plus 10% percent of
// dark to that square and so does another pass through another square
// until the last 10th square becomes completely black.
// Then the cycle repeats again.

// So the handler does the following:
// it verifies how many passes there were, if the number of passes is more than 10,
// it regenerates the base color and resets the passes counter,
// then it sets the color's value based on the formula
// base color + 10% of dark * number of passes
function handlerSquareHovered(targetSquare) {
    // Verify how many passes there were
    if (passCount > 10) {
        // Regenerate the base color 
        currentR = randomInt(0, 256);
        currentG = randomInt(0, 256);
        currentB = randomInt(0, 256);
        // Reset the pass count
        passCount = 0;
    }  
    
    // Add shade
    newR = currentR * (1 - shadeFactor * passCount);
    newG = currentG * (1 - shadeFactor * passCount);
    newB = currentB * (1 - shadeFactor * passCount);

    // Set the color
    targetSquare.style.backgroundColor = 'rgb(' + newR + ',' + newG + ',' + newB + ')';

    // Update the counter
    passCount++;
} 

 // Helps to quickly create a 'div' element 
function createDiv() {
    return document.createElement('div');
}

// Helps to set values for all the grid-property variables
function setGridProperties(numberOfSquares) {
    numberOfRows = numberOfColumns = numberOfSquares;
    squareWidth = squareHeight = gridSideLength / numberOfSquares;
}

// Helps to generate a random integer from between
// minimum and maximum number both inclusively
function randomInt(min, max) {
    return min + Math.floor(Math.random() * max);
}












