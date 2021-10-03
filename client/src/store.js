import { createStore } from 'redux';
import rootReducer from './reducers';


const store = createStore(
    rootReducer,
    {}
);

window.addEventListener("resize", function(){
    store.dispatch({type: "UPDATE_FORMAT", content: ""});
});
store.dispatch({type: "UPDATE_FORMAT", content: ""});

export default store;