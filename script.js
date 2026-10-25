const gridContainer = document.querySelector('#grid-container');

function createGrid(){
    for(let rowNum = 0; rowNum <= 5; rowNum++){
        for(let colNum = 0; colNum <= 5; colNum++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.backgroundColor = `blue`;
            gridContainer.appendChild(gridSquare);
        }
    }
}

createGrid();