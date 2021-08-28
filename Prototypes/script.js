const input = document.getElementById('textValue');
const taskContainer = document.getElementById("taskContainer");
const style = "width: 70%; text-align: center; background-color: white; border: 1px solid black; margin: 20px auto; height: 50px; font-size: 20px; line-height: 50px; border-radius: 5px; box-shadow: rgba(34, 60, 80, 0.2) 4px 4px 8px 0px";

const defaultDiv = function (id, label) {
    const defDiv = document.createElement('div');
    defDiv.innerHTML = `${label} <button type="submit" onclick="this.parentElement.remove()" style='background-color: red; color: white; cursor: pointer'>Done!</button>`;
    defDiv.style = style;
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
