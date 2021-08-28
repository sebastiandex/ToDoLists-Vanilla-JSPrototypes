const input = document.getElementById('textValue');
const taskContainer = document.getElementById("taskContainer");
const style = "width: 70%; text-align: center; background-color: white; border: 1px solid black; margin: 20px auto; height: 50px; font-size: 20px; line-height: 50px; border-radius: 5px; box-shadow: rgba(34, 60, 80, 0.2) 4px 4px 8px 0px";


const addNewTask = () => {
    if (input.value !== '' ) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `${input.value} <button type="submit" onclick="this.parentElement.remove()" style='background-color: red; color: white; cursor: pointer'>Done!</button>`;
        newDiv.style = style;
        taskContainer.appendChild(newDiv);
        document.getElementById('textValue').value = '';
    }
};
const enterSender = (e) => {
    if (e.keyCode === 13) {
        addNewTask();
    }
}
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => addNewTask())
