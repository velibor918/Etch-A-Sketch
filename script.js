
let container = document.querySelector('.container')

function createGrid(num){
    for(let i = 0; i < num; i++){
        const row = container.appendChild(document.createElement('div'));
        row.classList.add('row');
    for(let j = 0; j < num; j++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = `${900 / row}px`
        row.appendChild(square);
        };
    };
}

createGrid(64);