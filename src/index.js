const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "DECREMENT" button
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

// Dispatch the "RESET" button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', e => dispatch({ type: "RESET" }));

// Dispatch the "INCREMENT_FIVE" action every time the +5 button is pressed
const increment_five_Button = document.getElementById('increment_five');
increment_five_Button.addEventListener('click', e => dispatch({ type: "INCREMENT_FIVE" }));

// Dispatch the "DECREMENT_FIVE" action every time the -5 button is pressed
const decrement_five_Button = document.getElementById('decrement_five');
decrement_five_Button.addEventListener('click', e => dispatch({ type: "DECREMENT_FIVE" }));


// Change color based on selector

// Dispatch the "CHANGE COLOR" action every time the "select color" is updated
const changeColor = document.getElementById('select_color');
changeColor.addEventListener('change', e => dispatch({ type: "CHANGE_COLOR", color: e.target.value }));

// Dispatch the "CHANGE_VALUE" action every time the "counterValue" is updated
const newValue = document.getElementById('pickCount');
newValue.addEventListener('change', e => dispatch({ type: "CHANGE_VALUE", color: e.target.value }));


