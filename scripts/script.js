// Constants

const gridSideLength = 960;
const gridContainer = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');

gridContainer.style.width = gridSideLength + 'px';
gridContainer.style.height = gridSideLength + 'px';

// #DEBUG
console.log('Grid container:');
console.log(gridContainer);
console.log('Reset button:');
console.log(resetBtn);


// Variables

var currentGrid = null;

var numberOfRows = numberOfColumns = 31;
var squareWidth = squareHeight = Math.floor(gridSideLength / numberOfRows);

// #DEBUG
console.log(`Square{width = ${squareWidth}, height = ${squareHeight}}`);

// Draws the default 16x16 grid when the page is loaded
document.body.onload = () => {
    drawGrid();
} 

// The purpose of the function is to draw a grid
// either when the page is loaded or when the user pressed the 'Reset' button
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
            column.style.border = '1px solid lightgray';

            // Add the column to the row
            row.appendChild(column);
        }
        
        // Append the row to the grid
        currentGrid.appendChild(row);
    }
    
    // # DEBUG
    console.log('Current grid:');
    console.log(currentGrid);

    // Append the grid to the grid container
    gridContainer.appendChild(currentGrid);
 }

// Being called when the 'Reset' button is pressed
function resetButton() {

}

// The grid squares hover-state callback
function hoveredSquare() {

} 


 // Helps to quickly create a 'div' element 
function createDiv() {
    return document.createElement('div');
}













