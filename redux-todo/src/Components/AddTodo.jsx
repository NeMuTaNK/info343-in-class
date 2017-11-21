// One: take ther text from the input field and return
// as a proper "Action" JSON object 
// for use with other components

export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        text,
        completed: false
    }
}

// Two: Take the filter and return a proper "Action" JSON object
// to send to other components

export const setVisibilityFilter = (filter) => {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    }
}

// Three: Take the Todo item's id and returns a proper "Action" JSON object
// to send to other components

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

// Reducer takes the state of Redux (an array of previous Todo items)
// and return a *NEW* array of Todos (new state) w/ the new Todo added
// if the action type is "ADD_TODO"

// If the state passed in is undefined, intialize empty array
export const todo = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return
                [...state, {id: action.id, text: action.text, completed: false}]
        case "TOGGLE_TODO":
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                }
                return Object.assign({}
                    todo, {completed: !todo.completed}
                )
            })
        case "SET_VISIBILITY_FILTER": {
            return action.filter
        }

        default:
            return state
        }
    }
}
    