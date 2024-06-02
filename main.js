import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your todos?",
            validate: function (input) {
                if (input.trim() !== "") {
                    return true;
                }
                else {
                    return "Please enter a valid todo.";
                }
            },
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more todos?",
            default: false,
        },
    ]);
    if (addTask.todo !== undefined) {
        todos.push(addTask.todo);
    }
    condition = addTask.addMore;
    console.log(todos);
}
