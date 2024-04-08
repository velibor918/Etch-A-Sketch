
let container = document.querySelector('.container')

function createGrid(num){
    for(let i = 0; i < num; i++){
        const row = container.appendChild(document.createElement('div'));
        row.classList.add('row')
    }

    for(let j = 0; j < num; j++){
        const square = document.createElement('div');
        row.appendChild(square)
    }
}

createGrid(16);