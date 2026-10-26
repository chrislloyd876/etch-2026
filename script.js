const gridContainer = document.querySelector('#grid-container');

    for(let rowNum = 0; rowNum < 15; rowNum++){
        for(let colNum = 0; colNum <= 16; colNum++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.backgroundColor = `red`;
            gridSquare.style.width = `${gridContainer.clientWidth / 16}px`;
            gridSquare.style.height = `${gridContainer.clientHeight / 16}px`;
            gridContainer.appendChild(gridSquare);  
        }
    }  
        
    // How to change the color of the squares
    const allGridSquares = document.querySelectorAll('.grid-square');
    allGridSquares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            if(square.style.backgroundColor == 'pink'){
                square.style.backgroundColor = 'red';
            } else {
                square.style.backgroundColor = 'pink';
            }
        });
    });

function createNewGrid(numberOfSquares){
    for(let rowNum = 0; rowNum < numberOfSquares - 1; rowNum++){
        for(let colNum = 0; colNum <= numberOfSquares; colNum++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.backgroundColor = `red`;
            gridSquare.style.width = `${gridContainer.clientWidth / numberOfSquares}px`;
            gridSquare.style.height = `${gridContainer.clientHeight / numberOfSquares}px`;
            gridContainer.appendChild(gridSquare);  
        }
    }

    const newGridSquares = document.querySelectorAll('.grid-square');
    newGridSquares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            if(square.style.backgroundColor == 'pink'){
                square.style.backgroundColor = 'red';
            } else {
                square.style.backgroundColor = 'pink';
            }
        });
    });
}

    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', () => {
    let numberOfSquares = prompt(`Enter a single number for rows and colums`);
    const oldGridSquares = document.querySelectorAll('.grid-square');
    oldGridSquares.forEach((square) => {
        gridContainer.removeChild(square);
    });
    createNewGrid(numberOfSquares);
    });    