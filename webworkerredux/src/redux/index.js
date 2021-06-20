import { createStore } from 'redux'

const reducer = (state = { value: 0 }, action) => {
    const { type, payload } = action
    switch (type) {
        case 1:
            return { ...state, value: payload }
        default:
            return state
    }
}

const store = createStore(reducer)
window.store = store

export default store