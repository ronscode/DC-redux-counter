const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    console.log(action)
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    } else if (type === 'DECREMENT') {
        return {
            value: state.value -1
        } 
    } else if (type === 'INCREMENT_FIVE') {
        return {
            value: state.value  +5
        }
    } else if (type === 'DECREMENT_FIVE') {
        return {
            value: state.value -5
        }   
    } else if (type === 'CHANGE_COLOR') {
        return {
            value: state.value,
            color: action.color
        }
    } else if (type === 'CHANGE_VALUE') {
        return {
            value: action.color
        }
    } else if (type === 'RESET') {
        return {
            value: 0
        }
    }
        


    return state
}