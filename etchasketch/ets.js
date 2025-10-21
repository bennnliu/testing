const body = document.querySelector('body');
const container = document.createElement('div');
const button = document.createElement('button');

body.append(button);
button.textContent = "New Grid";
body.append(container);
container.id = "container";

// Initial grid
createGrid(16, 16);

const handleNewGrid = () => {
    const existingForm = document.querySelector('#newGrid');
    if (existingForm) existingForm.remove();

    const form = document.createElement('form');
    form.id = 'newGrid';

    const rowInput = document.createElement('input');
    const colInput = document.createElement('input');
    rowInput.setAttribute('type','text');
    colInput.setAttribute('type','text');
    rowInput.setAttribute('placeholder','Enter number of rows');
    colInput.setAttribute('placeholder','Enter number of columns');
    rowInput.id = 'newRow';
    colInput.id = 'newCol';

    form.append(rowInput, colInput);
    body.append(form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newRow = parseInt(document.querySelector('#newRow').value);
        const newCol = parseInt(document.querySelector('#newCol').value);

        if (!isNaN(newRow) && !isNaN(newCol)) {
            createGrid(newRow, newCol);
        }

        form.remove();
    }); 
}

button.addEventListener('click', handleNewGrid);

function createGrid(row, col) {
    container.innerHTML = ''; // clear old grid

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const div = document.createElement('div');
            div.dataset.gridId = `row=${i+1}col=${j+1}`;
            div.classList.add('cell');
            container.appendChild(div);

            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            });
        }
    }
}
