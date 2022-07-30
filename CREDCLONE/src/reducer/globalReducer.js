// custom imports
import ActionNames from '../utils/actionNames';

export const authReducer = (state = new LoadersModal(), action) => {
    const { payload } = action;
    switch (action.type) {
        case ActionNames.LOADING:
            return { ...state, ...payload }
        default:
            return { ...state };
    }
};

