import { EDIT_ITEM } from "./actions";

export const editItem = (item) => ({
    type: EDIT_ITEM,
    payload: item,
  });

  export default editItem;
