
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
        child.removeEventListener('mouseenter', eraseInner);
        child.removeEventListener('mouseenter', gradientColorInner);
        child.removeEventListener('mouseenter', randomColorInner);
        child.addEventListener('mouseenter', changeColorInner);
        }
        )
}

let colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener('click', changeColor);

let eraseBtn = document.querySelector('.eraser');

function eraseInner (event) {
    event.target.style.backgroundColor = `white`;
}

function erase() {
    let children = document.querySelectorAll('.square');

    children.forEach((child) => {
        child.removeEventListener('mouseenter', changeColorInner);
        child.removeEventListener('mouseenter', gradientColorInner);
        child.removeEventListener('mouseenter', randomColorInner);
        child.addEventListener('mouseenter', eraseInner)
    }
    );
};

eraseBtn.addEventListener('click', erase);

let clearBtn = document.querySelector('.clear-all');

function clear() {
    let children = document.querySelectorAll('.square');

    children.forEach((child) => {
        brightVal = 110;
        child.style.filter = `brightness(100%)`;
        child.style.backgroundColor = `white`;
    });
};

clearBtn.addEventListener('click', clear);

let randomBtn = document.querySelector('.random-color');

function randomColorInner (event) {
    event.target.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
};

function randomColor() {
    let children = document.querySelectorAll('.square');

    children.forEach((child) => {
        child.removeEventListener('mouseenter', changeColorInner);
        child.removeEventListener('mouseenter', gradientColorInner);
        child.removeEventListener('mouseenter', eraseInner);
        child.addEventListener('mouseenter', randomColorInner)
    });
};

randomBtn.addEventListener('click', randomColor);

let gradientBtn = document.querySelector('.gradient');

let brightVal = 110;

function gradientColorInner(event) {
    
    brightVal -= 10;
    event.target.style.filter = `brightness(${brightVal}%)`;
}

function gradientColor () {
    let children = document.querySelectorAll('.square');

    children.forEach((child) => {
        child.removeEventListener('mouseenter', changeColorInner);
        child.removeEventListener('mouseenter', randomColorInner);
        child.removeEventListener('mouseenter', eraseInner);
        child.addEventListener('mouseenter', gradientColorInner);
    }
    )
};

gradientBtn.addEventListener('click', gradientColor);


