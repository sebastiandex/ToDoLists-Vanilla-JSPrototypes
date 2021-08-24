const input = document.getElementById('textValue');
const taskContainer = document.getElementById("taskContainer");
const defaultDiv = function (id, label) {
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
    defDiv.style.borderRadius = '5px'
    defDiv.style.boxShadow = '4px 4px 8px 0 rgba(34, 60, 80, 0.2)'
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
const enterSender = (e) => {
    console.log(e)
    if (e.keyCode === 13) {
        addNewTask();
    }
}
