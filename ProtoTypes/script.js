const input = document.getElementById('textValue');
const taskContainer = document.getElementById("taskContainer");
const defaultDiv = function (id, label, isImportant) {
    const defDiv = document.createElement('div');
    defDiv.innerHTML = label;
    defDiv.style.width = '70%';
    defDiv.style.textAlign = 'center'
    defDiv.style.backgroundColor = 'white'
    defDiv.style.border = '1px black solid'
    defDiv.style.margin = '20px auto'
    defDiv.style.height = '50px'
    defDiv.style.fontSize = '20px'
    defDiv.style.lineHeight = '50px'

    return (
        defDiv
    )
};
const addNewTask = () => {
    let newDiv = new defaultDiv(2, input.value);
    console.log(defaultDiv())
    console.log(newDiv)
    taskContainer.appendChild(newDiv);
    document.getElementById('textValue').value = '';

};
