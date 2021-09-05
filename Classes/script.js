const input = document.getElementById('textValue');

class toDoList {
    static createTask (text) {
        const listItem = document.createElement('li');
        listItem.style = "list-style-type: none; width: 70%; text-align: center; background-color: white; border: 1px solid black; margin: 20px auto; height: 50px; font-size: 20px; line-height: 50px; border-radius: 5px; box-shadow: rgba(34, 60, 80, 0.2) 4px 4px 8px 0px";
        const label = document.createElement('input');
        label.value = text;
        label.style = 'width: 70%';
        listItem.appendChild(label);
        const defButton = document.createElement('button');
        defButton.style = 'background-color: red; color: white; cursor: pointer; margin-left: 30px';
        defButton.innerHTML = "Del";
        defButton.onclick = () => {this.removeTask(listItem)};
        listItem.appendChild(defButton);
        return listItem
    }
    static addTask (text) {
        let list = document.getElementById('taskContainer');
        list.appendChild(this.createTask(text));
    }
    static removeTask(item) {
        item.remove();
    }
}

const addNewTask = () => {
    if (input.value !== '') {
        toDoList.addTask(input.value);
        document.getElementById('textValue').value = '';
    }
};
const enterSender = (e) => {
    if (e.keyCode === 13) {
        addNewTask();
    }
}
