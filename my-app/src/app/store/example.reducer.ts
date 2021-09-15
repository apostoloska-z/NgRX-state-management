import { state } from '@angular/animations';
import {Action, createReducer, on} from '@ngrx/store';
import {ExampleActions} from './example.actions';

export interface State {
    count: number;
    message?: string;
    data?: any;
    prdata?: string;
}

const initialState: State = {
    count: 10,
};


export const exampleReducer = createReducer(
    initialState,
    on(ExampleActions.increaseCount, (state)=> ({
        ...state, 
        count: state.count+1,
    })),
    on(ExampleActions.sendMessage, (state, {message}) => ({
        ...state,
        message: message,
    })),
    on(ExampleActions.getWeatherSuccess, (state, {data}) => ({
        ...state,
        data: data,
    })),
    on(ExampleActions.getPromiseDataSuccess, (state, {prdata}) => ({
        ...state,
        prdata: prdata,
    })),

)

export function reducer(state: State | undefined, action: Action) {
    return exampleReducer(state, action);
}