// @ts-check
"use strict";

//TODO: create classes for Task,
//TaskList, Button, TaskForm, and App.
//Each of these classes should have
//a render() method that renders their
//data as HTML elements.

class Task {
<<<<<<< HEAD
    constructor(myTitle, doneness) {
        this.title = myTitle;
=======
    constructor(mytitle, doneness) {
        this.title = mytitle;
>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
        this.done = doneness;
    }

    render() {
        let li = document.createElement("li");
        li.textContent = this.title;
<<<<<<< HEAD
        if(this.done) {
            li.classList.add("done");
        }

        li.addEventListener("click", () => { //ES6 feature for function
            this.done = !this.done;
            li.classList.toggle("done");
        });
=======
        
        if (this.done) {
            li.classList.add("done");
        }

        li.addEventListener("click", () => {
            this.done = !this.done;
            li.classList.toggle("done");
        })
>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
        return li;
    }
}

class TaskList {
<<<<<<< HEAD
    constructor(myTasks) {
        this.tasks = myTasks;
=======
    constructor(mytasks) {
        this.tasks = mytasks;
>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
    }

    addTask(task) {
        this.tasks.push(task);
    }

<<<<<<< HEAD
=======
    purgeMe() {
        this.tasks = this.tasks.filter(task => !task.done);
    }

>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
    render() {
        let ul = document.createElement("ul");
        this.tasks.forEach(task => {
            ul.appendChild(task.render());
        });
        return ul;
    }
<<<<<<< HEAD

    purgeMe() {
        this.tasks = this.tasks.filter(task => !task.done);
    }
}

class Button {
    constructor(myLabel) {
        this.label = myLabel;
=======
}

class Button {
    constructor(mylabel) {
        this.label = mylabel;
>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
    }

    render() {
        let button = document.createElement("button");
<<<<<<< HEAD
        button.classList.add("btn", "btn-primary");
=======
        button.classList.add("btn","btn-primary");
>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
        button.textContent = this.label;
        return button;
    }
}

class TaskForm {
<<<<<<< HEAD
    // constructor() {}
=======
    //constuctor() {}
>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
    render() {
        let form = document.createElement("form");
        form.classList.add("pb-4");
        let input = document.createElement("input");
        input.classList.add("form-control");
<<<<<<< HEAD
        input.setAttribute("placeholder", "What do you need to do?");
=======
        input.setAttribute("placeholder", "what do you need to do?");
>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
        form.appendChild(input);
        return form;
    }
}

class App {
<<<<<<< HEAD
    constructor(yourParentElement, myTaskList) {
        this.parentElem = yourParentElement;
        this.taskList = myTaskList;
        this.newTaskForm = new TaskForm();
        this.purgeButton = new Button("Purge me");
=======
    constructor(yourparentElement, mytaskList) {
        this.parentElem = yourparentElement;
        this.taskList = mytaskList;
        this.newTaskForm = new TaskForm();
        this.purgeButton = new Button("Purge me!");
>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
    }

    render() {
        this.parentElem.textContent = "";

        let form = this.parentElem.appendChild(this.newTaskForm.render());
        let ul = this.parentElem.appendChild(this.taskList.render());
        let button = this.parentElem.appendChild(this.purgeButton.render());

        form.addEventListener("submit", evt => {
            evt.preventDefault();
            let input = form.querySelector("input");
            this.taskList.addTask(new Task(input.value));
            let updatedBrowser = this.taskList.render();
            this.parentElem.replaceChild(updatedBrowser, ul);
            ul = updatedBrowser;
            input.value = "";
        });

<<<<<<< HEAD
        button.addEventListener("click", () => {
=======
        button.addEventListener("click", ()=> {
>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
            this.taskList.purgeMe();
            let updatedUI = this.taskList.render();
            this.parentElem.replaceChild(updatedUI, ul);
            ul = updatedUI;
        });
<<<<<<< HEAD
=======

>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
    }
}

let app = new App(document.querySelector("#app"),
    new TaskList([
        new Task("Learn ES6 Features!"),
<<<<<<< HEAD
        new Task("Buy a Ferrari")
    ]))

app.render();
=======
        new Task("Buy a Ferrari!")
    ]));

app.render();
>>>>>>> ec7093fba0aec63bdf230c668f0fdb6b6ce030b1
