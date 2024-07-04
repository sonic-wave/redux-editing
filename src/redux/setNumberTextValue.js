import { SET_USER_NUMBER_VALUE } from "./actions"

export const setUserNumberValue = (item) => ({
    type: SET_USER_NUMBER_VALUE,
    payload: item.numberValue,
});

export default setUserNumberValue;
