import React, {useState} from 'react';
import {ButtonEdit, CellCustom, CustomInput, Field, GroupCellBtn} from './style/style'

const Cell = ({
    children,
    toggleEditCell,
    lengthRow
}) => {
    const defaultState = {
        nameCell: children,
        edit: false
    }
    const [state, setState] = useState({
        nameCell: children,
        edit: false
    });

    const openEdit = () => setState({edit: !state.edit});

    const changeField = (e) =>
        setState(state =>
            ({...state, nameCell: e.target.value.trim()})
        );
    const cancelChangeField = () => setState(defaultState);

    const toggleEdit = () => setState({edit: false}, toggleEditCell(state.nameCell));

    const keyPressEvent = (e) => {
        if(e.key === 'Enter') {
            setState({edit: false}, toggleEditCell(state.nameCell));
        }
    }

    const renderField = () => (
        <Field>
            <CustomInput
                type='text'
                defaultValue={children}
                onKeyPress={keyPressEvent}
                onChange={changeField}
                autoFocus={true}
            />
            <GroupCellBtn className="group-cell-btn">
                <button onClick={toggleEdit}>V</button>
                <button onClick={cancelChangeField}>X</button>
            </GroupCellBtn>
        </Field>
    )

    const renderText = () => (
        <>
            {children}
            <ButtonEdit className='btn' onClick={openEdit}>Edit</ButtonEdit>
        </>
    );

    return (
        <CellCustom edit={state.edit} lengthRow={lengthRow}>
            { state.edit ?
                renderField()
                : renderText()
            }
        </CellCustom>
    );
}

export default Cell;
