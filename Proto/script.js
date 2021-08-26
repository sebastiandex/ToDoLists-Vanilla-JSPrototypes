const input = document.getElementById('textValue');
const taskContainer = document.getElementById("taskContainer");
const defDiv = document.createElement('div');
        defDiv.style = "width: 70%; text-align: center; background-color: white; border: 1px solid black; margin: 20px auto; height: 50px; font-size: 20px; line-height: 50px; border-radius: 5px; box-shadow: rgba(34, 60, 80, 0.2) 4px 4px 8px 0px"
const button = document.createElement("button");
    button.innerHTML = "Удалить";
    button.onclick = function () {this.parentElement.remove()};
    button.style = 'background-color: red; color: white; cursor: pointer; margin-left: 30px'
const fullDiv = {
    div: defDiv
}
const taskArray = [];
const addNewTask = () => {
    if (input.value !== '' ) {
        const label = document.createElement('label');
        label.style = 'width: 70%';
        label.innerHTML = input.value;
        const newDiv = document.createElement('div');
        newDiv.__proto__ = fullDiv.div;
        newDiv.appendChild(label);
        newDiv.appendChild(button);

        // newDiv.__proto__ = fullDiv;
        console.log(newDiv)
        newDiv.id = taskArray.length + 1;
        // newDiv.div.span.value = input.value;
        taskContainer.append(newDiv.div);
        document.getElementById('textValue').value = '';
    }
};
const enterSender = (e) => {
    if (e.keyCode === 13) {
        addNewTask();
    }
}
