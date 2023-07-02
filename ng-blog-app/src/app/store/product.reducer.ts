import { Product } from '../models/Product';
import { Action } from '@ngrx/store';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProductReducer(state: Product[] = [], action: any) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        default:
            return state;
    }
}