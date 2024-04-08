
let container = document.querySelector('.container');

let gridBtn = document.querySelector('.grid-creation');

function createGrid(){
    while (container.firstChild){
        container.removeChild(container.lastChild)
    }
    let num = Number(prompt('tasdgsdg'));
    if (num > 100){
        return alert("The grid can't be bigger than 100");   
    };
        for(let i = 0; i < num; i++){
            const row = container.appendChild(document.createElement('div'));
            row.classList.add('row');
        for(let j = 0; j < num; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.height = `${900 / row}px`;
            row.appendChild(square);
            };
        };
}

gridBtn.addEventListener('click', createGrid);

