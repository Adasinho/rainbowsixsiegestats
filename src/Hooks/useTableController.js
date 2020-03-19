import {useEffect, useReducer} from "react";

const initialState = {sortedState: [], sortedRecords: []};

const reducer = (state, action) => {
    let sortedState = state.sortedState;
    let sortedRecords = state.sortedRecords;

    for(let i = 0; i < sortedState.length; i++) {
        if (i === action.colNumber) sortedState[i] = sortedState[i] === 1 ? -1 : 1;
        else sortedState[i] = 0;
    }

    sortedRecords = sortedRecords.sort((a, b) => {
        if(sortedState[action.colNumber] === 1)
            return Object.values(b)[action.colNumber] - Object.values(a)[action.colNumber];
        else
            return Object.values(a)[action.colNumber] - Object.values(b)[action.colNumber];
    });

    return {sortedState, sortedRecords};
};

const useTableController = (records, rows, columns) => {
    const [state, dispatch] = useReducer(reducer, {sortedState: [], sortedRecords: []});

    useEffect(() => {
        let tab = [];
        for(let i = 0; i < columns; i++) tab.push(0);

        state.sortedState = tab;
        state.sortedRecords = records;
    }, []);

    const sortBy = colNumber => dispatch({colNumber});

    return [sortBy];
};
export {useTableController};