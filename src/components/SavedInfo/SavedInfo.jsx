import React from 'react'
import './SavedInfo.css'
import { useSelector, useDispatch } from "react-redux";
import setUserTextValue from '../../redux/setUserTextValue';
import setUserNumberValue from '../../redux/setNumberTextValue';
import editItem from '../../redux/editItem';
import deleteItem from '../../redux/deleteItem';


export const SavedInfo = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.value.items);

    const handleEditButton = (item) => {
        dispatch(setUserTextValue(item));
        dispatch(setUserNumberValue(item));
        dispatch(editItem(item));
    }

    const handleDeleteButton = (item) => {
        dispatch(deleteItem(item));
    }

    return (
        <>
            {items && items.map((item, index) => (
                <div className='saved-info-container' key={index}>
                    <div className='saved-info text'>{`${item.textValue} ${item.numberValue}`}</div>
                    <button className='saved-info-editBtn' onClick={() => handleEditButton(item)}>Edit</button>
                    <button className='saved-info-deleteBtn'onClick={() => handleDeleteButton(item)}>Delete</button>
                </div>
            ))
            }
        </>
    )
}
