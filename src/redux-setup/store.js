import { createStore, combineReducers } from "redux";

const initalState = {
  items: [],
};

const cartReduces = (state = initalState, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            
            return state;
        default:
            return state;
    }
};

const reducer = combineReducers({
  cart: cartReduces,
});

const store = createStore(reducer);

export default store;
