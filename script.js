
let container = document.querySelector('.container');

let gridBtn = document.querySelector('.grid-creation');

function createGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    let num = Number(prompt('Create a Grid.'));
    if (num > 100) {
        return alert("The grid can't be bigger than 100.");
    };
    for (let i = 0; i < num; i++) {
        const row = container.appendChild(document.createElement('div'));
        row.classList.add('row');
        for (let j = 0; j < num; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.height = `${600 / row}px`;
            row.appendChild(square);
        };
    };
}

gridBtn.addEventListener('click', createGrid);

let colorChoice = document.querySelector('#color-picker');

function changeColorInner (event) {
    event.target.style.backgroundColor = `${colorChoice.value}`
}

function changeColor() {
    let children = document.querySelectorAll('.square');

    children.forEach((child) => {
        child.addEventListener('mouseenter', changeColorInner);
        }
        )
}




let colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener('click', changeColor);

let eraseBtn = document.querySelector('.eraser');

function erase() {
    let children = document.querySelectorAll('.square');

    children.forEach((child) => {
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = `white`;
        }
        )
    }
    )
};

eraseBtn.addEventListener('click', erase);

let clearBtn = document.querySelector('.clear-all');

function clear() {
    let children = document.querySelectorAll('.square');

    children.forEach((child) => {
        child.style.backgroundColor = `white`;
    });
};

clearBtn.addEventListener('click', clear);

let randomBtn = document.querySelector('.random-color');

function randomColor() {
    let children = document.querySelectorAll('.square');

    children.forEach((child) => {
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
        })
    });
};

randomBtn.addEventListener('click', randomColor);

let gradientBtn = document.querySelector('.gradient');

function gradientColor () {
    let children = document.querySelectorAll('.square');

    children.forEach((child) => {
        child.addEventListener('mouseenter', () => {
            child.style.backgroundColor = child.style.backgroundColor;
            let val = child.style.filter = `brightness(100%)`;
            child.style.filter = `brightness(${val - 10}%)`;
        }
        )
    }
    )
};

gradientBtn.addEventListener('click', gradientColor);


