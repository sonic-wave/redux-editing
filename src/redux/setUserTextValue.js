import { SET_USER_TEXT_VALUE } from "./actions"

export const setUserTextValue = (item) => ({
  type: SET_USER_TEXT_VALUE,
  payload: item.textValue,
});

export default setUserTextValue;