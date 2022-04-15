const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    //console.log('CARD: Start Dragging');
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag() {
    //console.log('CARD: is Dragging');
    
}

function dragend() {
    //console.log('Stoped Dragging');
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}



dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    console.log('DROPZONE: Enter in Zone');
}

function dragover() {
    console.log('DROPZONE: Over');

    this.classList.add('over')

    const cardDragged = document.querySelector('.is-dragging')

    this.appendChild(cardDragged)
}

function dragleave() {
    console.log('DROPZONE: Leave');

    this.classList.remove('over')
}

function drop() {
    console.log('DROPZONE: Dropped');
}