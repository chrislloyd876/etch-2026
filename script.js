const gridContainer = document.querySelector('#grid-container');

function createGrid(){
    for(let rowNum = 0; rowNum <= 16; rowNum++){
        for(let colNum = 0; colNum <= 16; colNum++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.backgroundColor = `red`;
            gridContainer.appendChild(gridSquare);
        }
    }

    // How to change the color of the squares
    const allGridSquares = document.querySelectorAll('.grid-square');
    allGridSquares.forEach((element) => {
        element.addEventListener('mouseover', (e) => {
            if(element.style.backgroundColor == 'pink'){
                element.style.backgroundColor = 'red';
            } else {
                element.style.backgroundColor = 'pink';
            }
        });
    });
}   

createGrid();