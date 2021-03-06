// REDUCER (is a pure function)
function counter(currentState, action) {
    var nextState = {
        count: currentState.count
    }
    switch (action.type) {
        case 'ADD':
            console.log(action);
            nextState.count = currentState.count + 1
            return nextState
            break;
        case 'MINUS':
            console.log(action);
            nextState.count = currentState.count -1
            return nextState
            break;
        case 'RESET':
        console.log(action);
        nextState.count = 0
        return nextState
        break;


        default:
            return currentState


    }
}

// The Store! 
var state = { count: 0 } // state is the single source of truth!
var store = Redux.createStore(counter, state)

// Grabbing the counter
var counterElement = document.getElementById('counter')

console.log(store);

function render() {
    console.log('In render')
    console.log(store.getState());
    var state = store.getState();
    counterElement.innerHTML = state.count.toString();
}
store.subscribe(render)


// ACTIONS
document.getElementById('add')
    .addEventListener('click', function() {
        store.dispatch({type: 'ADD'})
    })
{ type: 'ADD'}

// Listener for minus button

document.getElementById('minus')
    .addEventListener('click', function() {
        store.dispatch({ type: 'MINUS'})
    })

// Listener for the reset button

document.getElementById('reset')
    .addEventListener('click', function() {
        store.dispatch({ type: 'RESET'})
    })