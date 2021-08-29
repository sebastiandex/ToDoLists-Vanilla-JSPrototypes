const input = document.getElementById('textValue');
const taskContainer = document.getElementById("taskContainer");
const style = "width: 70%; text-align: center; background-color: white; border: 1px solid black; margin: 20px auto; height: 50px; font-size: 20px; line-height: 50px; border-radius: 5px; box-shadow: rgba(34, 60, 80, 0.2) 4px 4px 8px 0px";
const taskArray = [];

class defaultDiv {
    constructor(task, id) {
        this.task = task;
        this.id = id;
    };

    addDiv() {
        const defDiv = document.createElement('div');
        defDiv.id = this.id;
        defDiv.style = style;
        const label = document.createElement('input');
        label.value = this.task;
        label.style = 'width: 70%';
        const defButton = document.createElement('button');
            defButton.style = 'background-color: red; color: white; cursor: pointer; margin-left: 30px';
            defButton.innerHTML = "Del";
            defButton.onclick = () => {document.getElementById(`${this.id}`).remove()};
        defDiv.appendChild(label);
        defDiv.appendChild(defButton);
        return defDiv
    };
}

const addNewTask = () => {
    if (input.value !== '') {
        const newDiv = new defaultDiv(input.value, (taskArray.length + 1).toString())
        taskContainer.append(newDiv.addDiv());
        taskArray.push(taskArray.length + 1)
        document.getElementById('textValue').value = '';
    }
};
const enterSender = (e) => {
    if (e.keyCode === 13) {
        addNewTask();
    }
}
