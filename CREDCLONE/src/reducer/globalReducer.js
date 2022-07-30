// custom imports
import ActionNames from '../utils/actionNames';

const authState = {
    firstName: '',
    lastName: '',
    dob: '',
    phoneNumber: '',
    email: '',
    password: ''
}
export const authReducer = (authState , action) => {
    const { payload } = action;
    switch (action.type) {
        case ActionNames.LOADING:
            return { ...authState, ...payload }
        default:
            return { ...authState };
    }
};

