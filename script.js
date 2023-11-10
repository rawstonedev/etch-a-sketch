const body = document.querySelector('body');

//create button to generate custom grid
const navBar = document.createElement('div');
navBar.className = 'navBar';
navBar.style.textAlign = 'center'
const grid = document.createElement('button');
grid.className = 'generate-btn'
grid.textContent = 'Generate Custom Grid';
grid.addEventListener('click',createGrid);
body.appendChild(navBar);
navBar.appendChild(grid);

//create empty container for grid
const container = document.createElement('div');
container.className = 'grid-container';
container.setAttribute('style', 'display: flex; flex-direction: column; align-items: center')
body.appendChild(container);

function createGrid() {
    //remove grid
    container.innerHTML = '';
    
    //limit rows and columns to 100
    let rows = parseInt(prompt('How many rows?','10'));
    let columns = parseInt(prompt('How many columns?','10'));
    if (rows>100) rows = 100; if (columns>100) columns = 100;


    for (let y = 1; y <= rows; y++) {
        let row = container.appendChild(document.createElement('div'));
        row.setAttribute('style','display: flex');
        row.className = `row${y}`;
        for (let x = 1; x<= columns; x++) {
            let column = row.appendChild(document.createElement('div'));
            column.className=`row${y}Column${x}`;
            column.setAttribute('style',`background-color: white; height: ${(500-rows)/rows}px; width: ${(500-columns)/columns}px`);
            column.style.borderTop = '1px solid lightblue';
            column.style.borderLeft = '1px solid lightblue';

            //adding right border for box at the end of each columns and viceversa for end of the rows
            if (column.className == `row${y}Column${columns}`) column.style.borderRight = '1px solid lightblue';
            if (column.className == `row${rows}Column${x}`) column.style.borderBottom = '1px solid lightblue';
            
            column.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = 'black';
            });
        }
    }
}