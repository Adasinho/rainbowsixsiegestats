import {useState, useReducer} from "react";

const initialState = {count: 0, dependencies: false};

const reducer = (state, action) => {
    let count = state.count;
    let dependencies = state.dependencies;

    switch(action.type) {
        case 'add':
            if(state.count === 0) dependencies = true;
            count++;

            return {count, dependencies};
        case 'delete':
            if(state.count === 1) dependencies = false;
            count--;

            return {count, dependencies}
        default:
            throw new Error();
    }
};

const useDependency = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addDependecy = () => {
        console.log("counter before add ");
        console.log(state);
        dispatch({type: 'add'});
    };

    const deleteDependency = () => {
        console.log("counter before delete ");
        console.log(state);
        dispatch({type: 'delete'});
    };

    return [state.dependencies, addDependecy, deleteDependency];
};
export {useDependency};