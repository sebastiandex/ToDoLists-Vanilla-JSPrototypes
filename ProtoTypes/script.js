const input = document.getElementById('textValue');
const taskContainer = document.getElementById("taskContainer");
const defaultDiv = function (id, label) {
    const defDiv = document.createElement('div');
    defDiv.innerHTML = `${label} <button type="submit" onclick="this.parentElement.remove()" style='background-color: red; color: white; cursor: pointer'>Done!</button>`;
    defDiv.style.width = '70%'
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
const taskArray = [];
const addNewTask = () => {
    if (input.value !== '' ) {
        let newDiv = new defaultDiv(taskArray.length + 1, input.value);
        taskContainer.appendChild(newDiv);
        taskArray.push(taskArray.length + 1)
        document.getElementById('textValue').value = '';
    }
};
const enterSender = (e) => {
    if (e.keyCode === 13) {
        addNewTask();
    }
}
