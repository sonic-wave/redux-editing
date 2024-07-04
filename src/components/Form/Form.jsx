import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM, SET_USER_TEXT_VALUE, SET_USER_NUMBER_VALUE } from "../../redux/actions";
import addItem from "../../redux/addItem";
import './Form.css';

export const Form = ({ newsId }) => {
    const dispatch = useDispatch();
    const { value: numberValue, userTextValue, userNumberValue, editItemId } = useSelector((state) => state.value);

    const submitHandler = (e) => {
        e.preventDefault();
        const itemId = editItemId || Date.now();
        dispatch(addItem({id: itemId, textValue: userTextValue, numberValue: userNumberValue}));
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-container'>
                <input
                    type="text"
                    required
                    value={userTextValue}
                    onChange={(e) => {
                        dispatch({
                            type: SET_USER_TEXT_VALUE,
                            payload: e.target.value,
                        });
                    }}
                />
                <input
                    type="number"
                    required
                    value={userNumberValue}
                    onChange={(e) => {
                        dispatch({
                            type: SET_USER_NUMBER_VALUE,
                            payload: e.target.value,
                        });
                    }}
                />
                <button type='submit'>Save</button>
                <button onClick={() => {
                    dispatch({
                    type: SET_USER_TEXT_VALUE,
                    payload: '',
                    })
                    dispatch({
                        type: SET_USER_NUMBER_VALUE,
                        payload: '',
                    })
                }}>Cancel</button>
            </div>
            <div>
                {numberValue}
            </div>
        </form>
    )
}