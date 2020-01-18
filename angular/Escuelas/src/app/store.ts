import { INCREMENTAR, DECREMENTAR } from './actions';
import { tassign } from 'tassign';

export interface IAppState {
    contador: number;
    mensaje: string;
}

export const INITIAL_STATE: IAppState = {
    contador: 0,
    mensaje: ''
};

export function rootReducer(state, action): IAppState {
    switch (action.type) {
        case INCREMENTAR: {
            return tassign(state, { contador: state.contador + 1 });
        }
        case DECREMENTAR: {
            return tassign(state, { contador: state.contador - 1 });
        }
    }
    return state;
}
