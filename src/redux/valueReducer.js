import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, SET_USER_TEXT_VALUE, SET_USER_NUMBER_VALUE } from "./actions";

const initialState = {
    items: [],
    userTextValue: '',
    userNumberValue: '',
    editItemId: null
};

const valueReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            if (state.editItemId !== null) {
                return {
                    ...state,
                    items: state.items.map((item) => item.id === state.editItemId
                        ? { ...item, textValue: state.userTextValue, numberValue: state.userNumberValue }
                        : item
                    ),
                    userTextValue: '',
                    userNumberValue: '',
                    editItemId: null,
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, action.payload],
                    userTextValue: '',
                    userNumberValue: '',
                }
            }
        case SET_USER_TEXT_VALUE:
            return {
                ...state,
                userTextValue: action.payload,
            }
        case SET_USER_NUMBER_VALUE:
            return {
                ...state,
                userNumberValue: action.payload,
            }
        case EDIT_ITEM:
            return {
                ...state,
                userTextValue: action.payload.textValue,
                userNumberValue: action.payload.numberValue,
                editItemId: action.payload.id,
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }    
        default:
            return state;
    }
};

export default valueReducer;