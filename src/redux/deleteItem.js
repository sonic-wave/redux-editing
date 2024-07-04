import { DELETE_ITEM } from "./actions"

export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: item,
});

export default deleteItem;