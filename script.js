const fill = document.querySelector(".fill");
const emptes = document.querySelectorAll(".empty");

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart() {
    setTimeout(() => {
        fill.className = "hold";
        fill.className = "invisible";
    }, 0);
}
function dragEnd() {
    fill.className = "fill";
}

for(const empty of emptes ) {
    empty.addEventListener("dragover", dragOver); //курсор мыши наведен на элемент при перетаскивании.
    empty.addEventListener("dragenter", dragEnter); // перетаскиваемый элемент достигает конечного элемента.
    empty.addEventListener("dragleave", dragLeave); //курсор мыши покидает пределы перетаскиваемого элемента.
    empty.addEventListener("drop", dragDrop); // происходит drop элемента
}

function dragOver(e) {
    e.preventDefault();
    fill.className = "Over";
}

function dragEnter() {
    this.className += " hovered";
}

function dragLeave() {
    this.className = "empty";
}
function dragDrop() {
    this.className = "empty";
    this.appendChild(fill);
}